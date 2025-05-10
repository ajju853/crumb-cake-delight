
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anita Sharma',
    role: 'Wedding Planner',
    quote: 'CrèmeCraft created the most stunning wedding cake for my client. The attention to detail and flavors were absolutely perfect. Everyone was impressed!',
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    role: 'Birthday Celebrant',
    quote: 'The birthday cake I ordered exceeded all expectations. Not only was it beautiful, but it was the most delicious cake I\'ve ever had. Will definitely order again!',
    avatar: 'R',
  },
  {
    id: 3,
    name: 'Priya Singh',
    role: 'Corporate Event Organizer',
    quote: 'We ordered cupcakes for our company event and they were a huge hit! The flavors were unique and the presentation was exceptional. Highly recommended!',
    avatar: 'P',
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-bakery-brown dark:text-bakery-cream mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-bakery-pink mx-auto"></div>
        </div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-bakery-cream/30 dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-bakery-pink text-white flex items-center justify-center text-2xl font-semibold mb-4">
                {testimonials[current].avatar}
              </div>
              <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="font-serif font-medium text-bakery-brown dark:text-bakery-pink">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {testimonials[current].role}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index 
                    ? 'bg-bakery-brown dark:bg-bakery-pink' 
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-bakery-brown dark:text-bakery-pink hover:bg-bakery-cream dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-bakery-brown dark:text-bakery-pink hover:bg-bakery-cream dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
