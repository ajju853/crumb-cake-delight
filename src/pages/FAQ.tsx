
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqCategories = [
  {
    category: 'Orders & Delivery',
    items: [
      {
        question: 'How do I place an order?',
        answer: 'You can place an order directly through our website by browsing our products, adding items to your cart, and proceeding to checkout. For custom orders, please contact us through our contact form or call us directly.'
      },
      {
        question: 'What is the delivery time?',
        answer: 'Standard delivery takes 24-48 hours. For same-day delivery, orders must be placed before 10 AM. Custom cakes require at least 3-5 days advance notice depending on the design complexity.'
      },
      {
        question: 'Do you deliver to all areas in Barshi?',
        answer: 'Yes, we deliver to all areas within Barshi city limits. For locations outside Barshi, additional delivery charges may apply based on the distance.'
      },
      {
        question: 'What if I need to cancel my order?',
        answer: 'Orders can be canceled up to 24 hours before the scheduled delivery time for a full refund. For cancellations within 24 hours of delivery, a 50% cancellation fee applies.'
      }
    ]
  },
  {
    category: 'Products & Customization',
    items: [
      {
        question: 'Can I request a custom cake design?',
        answer: 'Absolutely! We love creating custom designs for our customers. Please reach out through our contact form or call us directly to discuss your ideas and requirements.'
      },
      {
        question: 'Do you offer vegan/gluten-free/eggless options?',
        answer: 'Yes, we offer a variety of dietary options including vegan, gluten-free, and eggless cakes and desserts. Look for the dietary tags on our product pages or contact us for specific requirements.'
      },
      {
        question: 'How far in advance should I order a custom cake?',
        answer: 'For custom cakes, we recommend placing your order at least 7 days in advance. For elaborate designs or wedding cakes, 2-4 weeks notice is preferred to ensure we can accommodate your request.'
      },
      {
        question: 'How long do your cakes stay fresh?',
        answer: 'Our cakes are best enjoyed within 2-3 days of delivery when stored properly in a refrigerator. We do not use preservatives, so our products maintain their freshest taste within this timeframe.'
      }
    ]
  },
  {
    category: 'Payment & Pricing',
    items: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit/debit cards, UPI payments, and cash on delivery. For custom orders above ₹5000, we require a 50% advance payment.'
      },
      {
        question: 'Do you have a minimum order value?',
        answer: 'For standard menu items, there is no minimum order value. For custom orders, the minimum order value is ₹1000.'
      },
      {
        question: 'Are there any additional charges for delivery?',
        answer: 'Delivery is free within 5 km of our bakery for orders above ₹500. For locations beyond 5 km or orders below ₹500, a nominal delivery fee applies based on the distance.'
      },
      {
        question: 'Can I get a refund if I\'m not satisfied with my order?',
        answer: 'Customer satisfaction is our priority. If you\'re not satisfied with your order, please contact us within 24 hours of delivery with photos of the issue, and we\'ll work to make it right.'
      }
    ]
  },
  {
    category: 'About Us & College Project',
    items: [
      {
        question: 'Is CrèmeCraft a real bakery?',
        answer: 'CrèmeCraft is a project developed by the students of B.P. Sulakhe Commerce College, Barshi. While it showcases a fully functional e-commerce experience, it is primarily an educational demonstration.'
      },
      {
        question: 'What is the purpose of this project?',
        answer: 'This project represents the application of e-commerce principles, web development, and digital marketing strategies studied by commerce students. It demonstrates how traditional businesses can transition to the digital marketplace.'
      },
      {
        question: 'Can I use this project as a reference for my own work?',
        answer: 'Yes, this project can serve as an educational reference. Please ensure proper attribution to B.P. Sulakhe Commerce College, Barshi if you use any aspects of this project in your academic or professional work.'
      },
      {
        question: 'How can I learn more about B.P. Sulakhe Commerce College?',
        answer: 'You can visit the college\'s official website or contact the administration office directly for more information about programs, admissions, and academic opportunities.'
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

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
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to commonly asked questions about our products, ordering process, delivery, and more.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3"
          >
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-medium font-serif mb-4 text-bakery-brown dark:text-bakery-cream">
                Categories
              </h2>
              <ul className="space-y-2">
                {faqCategories.map((category, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => setActiveCategory(category.category)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.category
                          ? 'bg-bakery-cream dark:bg-gray-800 text-bakery-brown dark:text-bakery-cream'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {category.category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3"
          >
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6 text-bakery-brown dark:text-bakery-cream">
                {activeCategory}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {faqCategories
                  .find(category => category.category === activeCategory)?.items
                  .map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-900 font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3 pt-1 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                }
              </Accordion>
              
              <div className="mt-8 p-6 bg-bakery-cream/20 dark:bg-gray-800/50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you couldn't find the answer to your question, please feel free to contact us directly.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a 
                    href="/contact" 
                    className="inline-block px-6 py-3 bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink rounded-md transition-colors"
                  >
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
