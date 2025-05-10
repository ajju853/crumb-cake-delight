
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products } from '@/data/products';
import { useApp } from '@/contexts/AppContext';
import NotFound from '@/pages/NotFound';
import { CartItem, Product } from '@/types';

interface ProductDetailProps {
  specialEdition?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ specialEdition }) => {
  const { id } = useParams();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const navigate = useNavigate();
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // For special edition cakes
  if (specialEdition && id) {
    // Extract cake number from URL
    const cakeNumberMatch = id.match(/special-edition-(\d+)/);
    const cakeNumber = cakeNumberMatch ? parseInt(cakeNumberMatch[1]) : null;
    
    if (cakeNumber !== null) {
      // Mock cake details for special editions
      const cakeImages = [
        {
          src: 'lovable-uploads/88f3bcba-7a32-4f54-8005-8d9a63995748.png',
          title: 'Chocolate Floral Cake'
        },
        {
          src: 'lovable-uploads/31b25d0c-c5f5-46d1-ba6e-067461b1d913.png',
          title: 'White Floral Wedding Cake'
        },
        {
          src: 'lovable-uploads/b34cc02f-6b46-4298-8be2-bf6508e76af4.png',
          title: 'Fruit-topped White Cake'
        },
        {
          src: 'lovable-uploads/c02d5a00-65e8-4ba3-8fec-29ace6028ec3.png',
          title: 'Pink Drip Cake'
        },
        {
          src: 'lovable-uploads/2b974fd9-c3e4-4e32-9d5a-a7924193f2ea.png',
          title: 'White Buttercream Floral Cake'
        },
        {
          src: 'lovable-uploads/86e2323c-241c-4657-ac5e-1a03951df4b4.png',
          title: 'Dark Chocolate Sprinkles Cake'
        },
        {
          src: 'lovable-uploads/74955790-1e06-4800-bacd-3f87e12be169.png',
          title: 'Pink Double Drip Cake'
        },
        {
          src: 'lovable-uploads/2d713df2-ee47-433d-a79d-a4f60e3d7e9e.png',
          title: 'Painted Floral Cake'
        },
        {
          src: 'lovable-uploads/72260158-ef63-4842-9f73-7a941b6b7a03.png',
          title: 'Gold Leaf Floral Cake'
        },
        {
          src: 'lovable-uploads/4d524a73-5ea6-49cb-8066-931e50a11869.png',
          title: 'Red Berry Cake'
        },
        {
          src: 'lovable-uploads/f57c3e87-89a4-4398-b5af-5573354c3089.png',
          title: 'Blue Nautical Cake'
        }
      ];
      
      const adjustedIndex = cakeNumber - 31;
      if (adjustedIndex >= 0 && adjustedIndex < cakeImages.length) {
        const cake = cakeImages[adjustedIndex];
        
        const handleAddToCart = () => {
          addToCart({
            id: `special-edition-${cakeNumber}`,
            name: cake.title,
            price: 2500,
            image: cake.src,
            quantity: quantity
          });
        };
        
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="mb-4">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate(-1)} 
                  className="text-gray-500 hover:text-gray-800"
                >
                  ← Back
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Product Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-lg aspect-square">
                    <img 
                      src={cake.src} 
                      alt={cake.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-bakery-pink hover:bg-bakery-pink text-white">
                    Special Edition
                  </Badge>
                </motion.div>
                
                {/* Product Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h1 className="text-3xl font-serif font-bold text-bakery-brown dark:text-bakery-cream mb-2">
                    {cake.title}
                  </h1>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-amber-500">
                      <span className="mr-1">★</span>
                      <span>5.0</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-gray-500">Special Edition</span>
                  </div>
                  
                  <div className="text-2xl font-serif font-semibold text-bakery-brown dark:text-bakery-pink mb-4">
                    ₹2,500 - ₹3,500
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    This exquisite {cake.title.toLowerCase()} is a special edition creation, handcrafted with premium ingredients and meticulous attention to detail. Perfect for weddings, anniversaries, and other memorable celebrations.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Size Options</h3>
                    <div className="flex space-x-3 mb-4">
                      {['0.5 kg', '1 kg', '1.5 kg', '2 kg'].map((size, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 border rounded-full text-sm ${
                            index === 1 
                              ? 'bg-bakery-brown text-white dark:bg-bakery-pink border-bakery-brown dark:border-bakery-pink' 
                              : 'border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-700'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    
                    <h3 className="font-medium mb-2">Quantity</h3>
                    <div className="flex items-center w-fit border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden mb-6">
                      <button 
                        className="px-3 py-1 text-xl bg-gray-100 dark:bg-gray-800"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-6 py-1">{quantity}</span>
                      <button 
                        className="px-3 py-1 text-xl bg-gray-100 dark:bg-gray-800"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </Button>
                    <Button variant="outline">
                      Request Customization
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        );
      }
    }
    
    return <NotFound />;
  }
  
  // Regular product detail handling
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return <NotFound />;
  }
  
  const productImages = [product.image, ...Array(3).fill('/placeholder.svg')];
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  };
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)} 
            className="text-gray-500 hover:text-gray-800"
          >
            ← Back
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-lg aspect-square mb-4">
              <img 
                src={productImages[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeImage === index 
                      ? 'border-bakery-pink' 
                      : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-2 mb-2">
              {product.dietary.eggless && (
                <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800">Eggless</Badge>
              )}
              {product.dietary.glutenFree && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-800">Gluten Free</Badge>
              )}
              {product.dietary.vegan && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-300 border-purple-200 dark:border-purple-800">Vegan</Badge>
              )}
              {product.dietary.sugarFree && (
                <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800">Sugar Free</Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-bakery-brown dark:text-bakery-cream mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-amber-500">
                <span className="mr-1">★</span>
                <span>{product.rating}</span>
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-500">{product.reviews} reviews</span>
            </div>
            
            <div className="text-2xl font-serif font-semibold text-bakery-brown dark:text-bakery-pink mb-4">
              {formattedPrice}
            </div>
            
            <Tabs defaultValue="description" className="mb-6" onValueChange={setActiveTab} value={activeTab}>
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="pt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="text-sm bg-bakery-cream/30 dark:bg-gray-800 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="ingredients" className="pt-4">
                <h4 className="font-medium mb-2">Ingredients:</h4>
                <ul className="text-gray-600 dark:text-gray-300 list-disc pl-5 space-y-1">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  * All our ingredients are sourced from premium suppliers.
                </p>
              </TabsContent>
              <TabsContent value="reviews" className="pt-4">
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border-b dark:border-gray-800 pb-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-bakery-cream dark:bg-gray-800 mr-3 flex items-center justify-center">
                            {String.fromCharCode(65 + index)}
                          </div>
                          <div>
                            <div className="font-medium">Customer {index + 1}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(2023, 5 - index, 15).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="flex text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        This {product.name.toLowerCase()} was absolutely delicious! The texture was perfect and the flavor was amazing. Will definitely order again!
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Size Options</h3>
              <div className="flex space-x-3 mb-4">
                {['0.5 kg', '1 kg', '1.5 kg', '2 kg'].map((size, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 border rounded-full text-sm ${
                      index === 1 
                        ? 'bg-bakery-brown text-white dark:bg-bakery-pink border-bakery-brown dark:border-bakery-pink' 
                        : 'border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center w-fit border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden mb-6">
                <button 
                  className="px-3 py-1 text-xl bg-gray-100 dark:bg-gray-800"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-6 py-1">{quantity}</span>
                <button 
                  className="px-3 py-1 text-xl bg-gray-100 dark:bg-gray-800"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline">
                Add to Wishlist
              </Button>
              <Button variant="outline">
                Request Customization
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
