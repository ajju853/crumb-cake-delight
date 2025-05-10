
import React from 'react';
import Category from './Category';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const SpecialCakes = () => {
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

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-serif font-bold text-center mb-8 text-bakery-brown dark:text-bakery-cream"
      >
        Special Edition Cakes
      </motion.h2>
      
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Explore our collection of handcrafted special edition cakes, perfect for weddings, anniversaries, and other memorable occasions.
      </p>
      
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
        {cakeImages.map((cake, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <Link to={`/products/special-edition-${index + 31}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={cake.src} 
                    alt={cake.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-serif font-medium text-lg text-bakery-brown dark:text-bakery-cream">{cake.title}</h3>
                  <CardDescription>Special Edition</CardDescription>
                  <p className="mt-2 font-serif font-semibold text-bakery-brown dark:text-bakery-cream">₹1,800 - ₹3,500</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-16">
        <Category />
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  return <SpecialCakes />;
};

export default Products;
