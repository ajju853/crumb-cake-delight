
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 8);
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-4">
            Our Featured Creations
          </h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Indulge in our most loved gourmet cakes and desserts, each one a testament to our passion for creating extraordinary sweet experiences.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              variant="outline" 
              className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white dark:border-bakery-pink dark:text-bakery-pink dark:hover:bg-bakery-pink dark:hover:text-white"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
