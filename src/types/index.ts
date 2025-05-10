
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  ingredients: string[];
  occasion?: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  seasonal?: boolean; // Added this property to fix the type error
  dietary: {
    eggless: boolean;
    glutenFree: boolean;
    vegan: boolean;
    sugarFree: boolean;
  }
}

export interface FilterOptions {
  category: string[];
  occasion: string[];
  dietary: string[];
  priceRange: number[];
  sortBy: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export type ThemeMode = 'light' | 'dark';

export interface Order {
  id: string;
  date: string;
  status: 'placed' | 'preparing' | 'out-for-delivery' | 'delivered';
  items: CartItem[];
  total: number;
  address: string;
  paymentMethod: string;
}
