
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroImage {
  src: string;
  alt: string;
}

const heroImages: HeroImage[] = [
  { 
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1589&auto=format&fit=crop', 
    alt: 'Chocolate cake with berries' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1465&auto=format&fit=crop', 
    alt: 'Strawberry shortcake' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1574&auto=format&fit=crop', 
    alt: 'Cheesecake with berries' 
  }
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
        </motion.div>
      ))}
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6">
              Decadent Desserts <br />Crafted with Passion
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Indulge in our artisanal cakes and pastries, each one a masterpiece of flavor and design.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products">
                <Button 
                  size="lg" 
                  className="bg-bakery-cream hover:bg-white text-bakery-brown border border-bakery-cream hover:border-white"
                >
                  Explore Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-bakery-brown"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImage === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
