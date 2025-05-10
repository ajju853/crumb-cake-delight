
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { useApp } from '@/contexts/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useApp();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const rotateX = 10 * (0.5 - y);
    const rotateY = -10 * (0.5 - x);
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden border border-gray-100 dark:border-gray-800 product-card bg-white dark:bg-gray-900"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease'
        }}
      >
        <Link to={`/product/${product.id}`} className="block">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-2">
              {product.new && (
                <Badge variant="secondary" className="bg-emerald-500 text-white dark:bg-emerald-600 hover:bg-emerald-600">New</Badge>
              )}
              {product.bestseller && (
                <Badge variant="secondary" className="bg-amber-500 text-white dark:bg-amber-600 hover:bg-amber-600">Bestseller</Badge>
              )}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-serif text-lg font-medium line-clamp-2 leading-tight">{product.name}</h3>
              {product.rating && (
                <div className="flex items-center text-amber-500">
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="ml-1">★</span>
                </div>
              )}
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2">{product.description}</p>
            
            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-serif font-semibold text-bakery-brown dark:text-bakery-pink">
                {formattedPrice}
              </span>
            </div>
          </div>
        </Link>
        
        <div className="px-4 pb-4">
          <Button 
            variant="default" 
            className="w-full bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
