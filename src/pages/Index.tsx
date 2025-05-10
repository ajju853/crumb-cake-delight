
import React from 'react';
import Hero from '@/components/UI/Hero';
import FeaturedProducts from '@/components/Product/FeaturedProducts';
import CategoryShowcase from '@/components/UI/CategoryShowcase';
import Testimonials from '@/components/UI/Testimonials';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <FeaturedProducts />
      
      <CategoryShowcase />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-gradient-bakery dark:bg-gradient-midnight rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 flex flex-col justify-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-white mb-6">
                  Custom Cake Design
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Let us create the cake of your dreams for your special occasion. Our pastry artists will work with you to design a custom creation that's as unique as your celebration.
                </p>
                <div>
                  <Link to="/contact">
                    <Button
                      className="bg-white hover:bg-gray-100 text-bakery-brown dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white"
                    >
                      Request a Custom Cake
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1587&auto=format&fit=crop"
                  alt="Custom cake design"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section className="py-16 bg-bakery-cream/30 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-6">
                Sweet Moments, Delivered
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                From birthdays to weddings, anniversaries to corporate events, let CrèmeCraft be part of your special moments. Order online for delivery or pickup.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/products">
                  <Button
                    size="lg"
                    className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                  >
                    Order Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white dark:border-bakery-pink dark:text-bakery-pink dark:hover:bg-bakery-pink dark:hover:text-white"
                  >
                    About CrèmeCraft
                  </Button>
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🎂</div>
                  <h3 className="font-serif font-medium text-bakery-brown dark:text-bakery-cream">Fresh Daily</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Baked fresh every day</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🚚</div>
                  <h3 className="font-serif font-medium text-bakery-brown dark:text-bakery-cream">Fast Delivery</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Same-day available</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌿</div>
                  <h3 className="font-serif font-medium text-bakery-brown dark:text-bakery-cream">Quality Ingredients</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Premium sourced</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">✨</div>
                  <h3 className="font-serif font-medium text-bakery-brown dark:text-bakery-cream">Custom Designs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Made to order</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
