
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem, User, ThemeMode } from '@/types';

interface AppContextProps {
  cart: CartItem[];
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (item: Product | Partial<CartItem>) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // User state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  // Theme state
  const [theme, setTheme] = useState<ThemeMode>('light');
  
  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Add to cart function
  const addToCart = (item: Product | Partial<CartItem>) => {
    // Create a CartItem object from the provided item
    const cartItem: CartItem = {
      id: item.id || '',
      name: item.name || '',
      price: item.price || 0,
      quantity: item.quantity || 1,
      image: item.image || ''
    };
    
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += cartItem.quantity;
        return updatedCart;
      } else {
        // Add new item
        return [...prevCart, cartItem];
      }
    });
    
    // Open cart when adding item
    setIsCartOpen(true);
  };
  
  // Remove from cart function
  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  // Update cart item quantity
  const updateCartItemQuantity = (id: string, quantity: number) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  // Clear cart function
  const clearCart = () => {
    setCart([]);
  };
  
  // Login function (mock)
  const login = async (email: string, password: string): Promise<boolean> => {
    // This is a mock implementation - in a real app, you would validate with an API
    if (email && password.length >= 6) {
      setIsAuthenticated(true);
      setUser({
        id: '1',
        name: 'Demo User',
        email: email,
        avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=6e2f1a&color=fff',
      });
      return true;
    }
    return false;
  };
  
  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };
  
  // Update user function
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData });
    }
  };
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
    // Update document class for Tailwind dark mode
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  // Set initial theme based on user preference
  React.useEffect(() => {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <AppContext.Provider value={{
      cart,
      cartTotal,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      isAuthenticated,
      user,
      login,
      logout,
      updateUser,
      theme,
      toggleTheme
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextProps => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
