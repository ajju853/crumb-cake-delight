
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Layer Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1589&auto=format&fit=crop',
    path: '/category/layer-cakes'
  },
  {
    name: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1480&auto=format&fit=crop',
    path: '/category/cupcakes'
  },
  {
    name: 'Cheesecakes',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1470&auto=format&fit=crop',
    path: '/category/cheesecakes'
  },
  {
    name: 'Cookies & Macarons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1470&auto=format&fit=crop',
    path: '/category/cookies-macarons'
  }
];

const CategoryShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-bakery-cream/20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-4">
            Explore Our Categories
          </h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of handcrafted desserts, each made with the finest ingredients and artisanal techniques.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={category.path}>
              <motion.div 
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-serif font-semibold text-white">
                      {category.name}
                    </h3>
                    <div className="w-0 h-[2px] bg-bakery-pink transition-all duration-300 group-hover:w-24"></div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
