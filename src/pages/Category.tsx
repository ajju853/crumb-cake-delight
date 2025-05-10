import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '@/components/Product/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { getFilteredProducts } from '@/data/products';
import { FilterOptions } from '@/types';

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [filters, setFilters] = useState<FilterOptions>({
    category: [],
    occasion: [],
    dietary: [],
    priceRange: [0, 5000],
    sortBy: 'featured'
  });
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  
  // Map URL slug to actual category names
  const getCategoryFromSlug = (slug: string) => {
    const categoryMap: Record<string, string> = {
      'layer-cakes': 'Layer Cakes',
      'cupcakes': 'Cupcakes',
      'cheesecakes': 'Cheesecakes',
      'cookies-macarons': 'Cookies & Macarons',
      'specialty-desserts': 'Specialty Desserts',
      'dietary': ''
    };
    
    return categoryMap[slug] || '';
  };
  
  // Update filters based on URL
  useEffect(() => {
    const category = getCategoryFromSlug(slug || '');
    
    setFilters(prev => ({
      ...prev,
      category: category ? [category] : [],
    }));
  }, [slug]);
  
  // Apply filters to get products
  useEffect(() => {
    const filtered = getFilteredProducts(
      filters.category,
      filters.occasion,
      filters.dietary,
      [filters.priceRange[0], filters.priceRange[1]] as [number, number],
      filters.sortBy
    );
    
    setProducts(filtered);
  }, [filters]);
  
  const toggleFilter = (type: keyof FilterOptions, value: string) => {
    setFilters(prev => {
      const currentFilters = prev[type] as string[];
      
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [type]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentFilters, value]
        };
      }
    });
  };
  
  const updatePriceRange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: value
    }));
  };
  
  const updateSortBy = (value: string) => {
    setFilters(prev => ({
      ...prev,
      sortBy: value
    }));
  };
  
  const categoryTitle = getCategoryFromSlug(slug || '');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-2">
          {categoryTitle || 'All Products'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {products.length} items
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filters Toggle */}
        <div className="lg:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
            {filtersVisible ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${filtersVisible ? 'block' : 'hidden'} lg:block`}>
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="font-medium mb-3">Sort By</h3>
              <select 
                className="w-full p-2 border rounded-md dark:bg-gray-900 dark:border-gray-700"
                value={filters.sortBy}
                onChange={(e) => updateSortBy(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="nameAsc">Name: A to Z</option>
                <option value="nameDesc">Name: Z to A</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="px-2">
                <Slider
                  value={filters.priceRange}
                  min={0}
                  max={5000}
                  step={100}
                  onValueChange={updatePriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>₹{filters.priceRange[0]}</span>
                  <span>₹{filters.priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {['Layer Cakes', 'Cupcakes', 'Cheesecakes', 'Cookies & Macarons', 'Specialty Desserts'].map((category) => (
                  <label key={category} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={filters.category.includes(category)}
                      onChange={() => toggleFilter('category', category)}
                    />
                    <span className="text-gray-700 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Occasions</h3>
              <div className="space-y-2">
                {['Birthday', 'Wedding', 'Anniversary', 'Summer Party', 'Fall Celebration', 'Spring Celebration'].map((occasion) => (
                  <label key={occasion} className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2"
                      checked={filters.occasion.includes(occasion)}
                      onChange={() => toggleFilter('occasion', occasion)}
                    />
                    <span className="text-gray-700 dark:text-gray-300">{occasion}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Dietary Options</h3>
              <div className="space-y-2">
                {['eggless', 'glutenFree', 'vegan', 'sugarFree'].map((dietary) => {
                  const displayNames: Record<string, string> = {
                    'eggless': 'Eggless',
                    'glutenFree': 'Gluten-Free',
                    'vegan': 'Vegan',
                    'sugarFree': 'Sugar-Free'
                  };
                  
                  return (
                    <label key={dietary} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-2"
                        checked={filters.dietary.includes(dietary)}
                        onChange={() => toggleFilter('dietary', dietary)}
                      />
                      <span className="text-gray-700 dark:text-gray-300">{displayNames[dietary]}</span>
                    </label>
                  );
                })}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setFilters({
                category: slug ? [getCategoryFromSlug(slug)] : [],
                occasion: [],
                dietary: [],
                priceRange: [0, 5000],
                sortBy: 'featured'
              })}
            >
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Try adjusting your filters or explore our other categories.</p>
              <Button 
                variant="default"
                className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                onClick={() => setFilters({
                  category: [],
                  occasion: [],
                  dietary: [],
                  priceRange: [0, 5000],
                  sortBy: 'featured'
                })}
              >
                View All Products
              </Button>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
