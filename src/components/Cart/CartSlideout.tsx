
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import CartItem from './CartItem';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

const CartSlideout: React.FC = () => {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, clearCart } = useApp();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const navigate = useNavigate();
  
  const handleCloseCart = () => {
    setIsCartOpen(false);
    // Reset checkout state when closing the cart
    setTimeout(() => {
      setCheckoutStep('cart');
    }, 300);
  };
  
  const handleCheckout = () => {
    setCheckoutStep('checkout');
  };
  
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      const newOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
      setOrderNumber(newOrderNumber);
      setIsProcessing(false);
      setCheckoutStep('confirmation');
      
      // Trigger confetti when order is complete
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // Clear cart after successful order
      clearCart();
    }, 2000);
  };
  
  const handleContinueShopping = () => {
    setIsCartOpen(false);
    // Reset checkout state
    setTimeout(() => {
      setCheckoutStep('cart');
    }, 300);
  };
  
  const handleViewOrder = () => {
    setIsCartOpen(false);
    navigate('/profile');
    // Reset checkout state
    setTimeout(() => {
      setCheckoutStep('cart');
    }, 300);
  };
  
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cartTotal);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={handleCloseCart}
          />
          
          {/* Slideout Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col"
          >
            <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-serif font-semibold text-bakery-brown dark:text-bakery-cream">
                {checkoutStep === 'cart' ? 'Your Cart' : 
                 checkoutStep === 'checkout' ? 'Checkout' : 'Order Confirmation'}
              </h2>
              <Button variant="ghost" size="icon" onClick={handleCloseCart}>
                ×
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4">
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="text-6xl mb-4">🛒</div>
                      <h3 className="text-xl font-serif mb-2">Your cart is empty</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6">Add some delicious treats to get started!</p>
                      <Button 
                        variant="default"
                        className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                        onClick={handleCloseCart}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                </>
              )}
              
              {checkoutStep === 'checkout' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-serif font-medium">Delivery Information</h3>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bakery-pink dark:bg-gray-800 dark:border-gray-700"
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bakery-pink dark:bg-gray-800 dark:border-gray-700"
                      />
                      <input
                        type="text"
                        placeholder="Delivery Address"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bakery-pink dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-serif font-medium">Delivery Date & Time</h3>
                    <div className="space-y-2">
                      <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bakery-pink dark:bg-gray-800 dark:border-gray-700"
                      />
                      <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bakery-pink dark:bg-gray-800 dark:border-gray-700">
                        <option value="">Select Time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 8 PM)</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-serif font-medium">Payment Method</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-md dark:border-gray-700">
                        <input type="radio" id="payment-cod" name="payment" defaultChecked />
                        <label htmlFor="payment-cod">Cash on Delivery</label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-md dark:border-gray-700">
                        <input type="radio" id="payment-card" name="payment" />
                        <label htmlFor="payment-card">Credit/Debit Card</label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-md dark:border-gray-700">
                        <input type="radio" id="payment-upi" name="payment" />
                        <label htmlFor="payment-upi">UPI</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-serif font-medium">Order Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>{formattedTotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>₹50</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>{new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }).format(cartTotal + 50)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {checkoutStep === 'confirmation' && (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <Check size={40} className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Your order has been placed successfully.</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Order #{orderNumber}</p>
                  
                  <div className="w-full max-w-md p-4 border border-gray-200 dark:border-gray-800 rounded-lg mb-6">
                    <h4 className="font-medium mb-2">Order Status</h4>
                    <div className="flex justify-between mb-2 text-sm">
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                          <Check size={14} />
                        </div>
                        <span>Order Placed</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-700 rounded-full"></div>
                        <span className="text-gray-500">Preparing</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-700 rounded-full"></div>
                        <span className="text-gray-500">On the Way</span>
                      </div>
                      <div className="flex flex-col items-center space-y-1">
                        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-700 rounded-full"></div>
                        <span className="text-gray-500">Delivered</span>
                      </div>
                    </div>
                    <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <Button
                      variant="outline"
                      className="border-bakery-brown text-bakery-brown hover:bg-bakery-brown hover:text-white dark:border-bakery-pink dark:text-bakery-pink dark:hover:bg-bakery-pink dark:hover:text-white"
                      onClick={handleViewOrder}
                    >
                      View Order
                    </Button>
                    <Button
                      variant="default"
                      className="bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                      onClick={handleContinueShopping}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            {checkoutStep === 'cart' && cart.length > 0 && (
              <div className="p-4 border-t dark:border-gray-800">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-serif font-semibold text-lg">{formattedTotal}</span>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            )}
            
            {checkoutStep === 'checkout' && (
              <div className="p-4 border-t dark:border-gray-800">
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setCheckoutStep('cart')}
                  >
                    Back
                  </Button>
                  <Button 
                    variant="default" 
                    className="flex-1 bg-bakery-brown hover:bg-bakery-light-brown text-white dark:bg-bakery-dark-pink dark:hover:bg-bakery-pink"
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSlideout;
