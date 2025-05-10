
import React from 'react';
import { Button } from '@/components/ui/button';
import { CartItem as CartItemType } from '@/types';
import { useApp } from '@/contexts/AppContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = useApp();
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
    } else {
      updateCartItemQuantity(item.id, newQuantity);
    }
  };
  
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price);
  
  const formattedSubtotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.price * item.quantity);

  return (
    <div className="flex space-x-3 border-b pb-4 dark:border-gray-800">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{formattedPrice}</div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-1">
            <Button 
              variant="outline" 
              size="icon"
              className="w-6 h-6 p-0"
              onClick={() => handleQuantityChange(item.quantity - 1)}
            >
              -
            </Button>
            <span className="w-6 text-center text-sm">{item.quantity}</span>
            <Button 
              variant="outline" 
              size="icon"
              className="w-6 h-6 p-0"
              onClick={() => handleQuantityChange(item.quantity + 1)}
            >
              +
            </Button>
          </div>
          
          <div className="text-sm font-medium">{formattedSubtotal}</div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 -mr-2"
        onClick={() => removeFromCart(item.id)}
      >
        ×
      </Button>
    </div>
  );
};

export default CartItem;
