
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-6">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-semibold mb-4 text-bakery-brown dark:text-bakery-cream">
              A Sweet Tradition
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              CrèmeCraft was born from a passion for creating extraordinary desserts that combine traditional techniques with innovative flavors. What started as a small family bakery has grown into a beloved destination for dessert enthusiasts.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Each of our creations is handcrafted with love and attention to detail, using only the finest ingredients. We believe that desserts should not only taste amazing but also be visually stunning works of art.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1589&auto=format&fit=crop" 
              alt="Our bakery" 
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16 bg-bakery-cream/20 dark:bg-gray-900 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-serif font-semibold mb-6 text-center text-bakery-brown dark:text-bakery-cream">
            Made with Love by B.P.Sulakhe Commerce College, Barshi
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            This project proudly represents B.P.Sulakhe Commerce College, Barshi. It showcases the creative talents and technical skills of our students, blending business principles with digital innovation.
          </p>
          
          <div className="flex justify-center">
            <img 
              src="/placeholder.svg" 
              alt="B.P.Sulakhe Commerce College" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </motion.div>
        
        <div className="grid md:gri-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-4xl mb-4">🧁</div>
            <h3 className="text-xl font-serif font-semibold mb-2 text-bakery-brown dark:text-bakery-cream">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To create memorable dessert experiences through exquisite flavors and beautiful presentations that bring joy to every celebration.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-4xl mb-4">🍰</div>
            <h3 className="text-xl font-serif font-semibold mb-2 text-bakery-brown dark:text-bakery-cream">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Quality, creativity, and community are at the heart of everything we do. We're committed to excellence in every cake we bake.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center"
          >
            <div className="text-4xl mb-4">🍪</div>
            <h3 className="text-xl font-serif font-semibold mb-2 text-bakery-brown dark:text-bakery-cream">Our Promise</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We promise to use only the finest ingredients, create each dessert with care, and deliver an exceptional experience every time.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-serif font-semibold mb-4 text-bakery-brown dark:text-bakery-cream">
            Taste the Difference
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to experience our delicious creations? Browse our collection and place your order today!
          </p>
          
          <Link to="/products">
            <Button 
              size="lg" 
              className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
            >
              Explore Our Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
