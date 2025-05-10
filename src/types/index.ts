
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  ingredients?: string[];
  occasion?: string;
  rating?: number;
  reviews?: number;
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
  dietary?: {
    eggless?: boolean;
    glutenFree?: boolean;
    vegan?: boolean;
    sugarFree?: boolean;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  orders?: Order[];
}

export interface Order {
  id: string;
  date: string;
  status: 'placed' | 'preparing' | 'out-for-delivery' | 'delivered';
  items: CartItem[];
  total: number;
  address: string;
  paymentMethod: string;
}

export type ThemeMode = 'light' | 'dark';

export interface FilterOptions {
  category: string[];
  occasion: string[];
  dietary: string[];
  priceRange: [number, number];
  sortBy: string;
}
