export type CategoryId = 
  | 'all'
  | 'pizza'
  | 'special-pizza'
  | 'combos'
  | 'burger-sandwich'
  | 'maggi-fries-sides'
  | 'pasta-garlic-bread'
  | 'drinks-beverages';

export interface PizzaSizeOption {
  name: 'Small' | 'Medium' | 'Large';
  code: 'S' | 'M' | 'L';
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number; // Base or starting price
  isPopular?: boolean;
  isBestDeal?: boolean;
  image: string;
  sizes?: PizzaSizeOption[];
  hasCustomAddons?: boolean; // Extra cheese / Extra topping options
  tag?: string;
}

export interface CartItem {
  id: string;
  menuItemId: string;
  name: string;
  size?: 'Small' | 'Medium' | 'Large';
  extraCheese?: boolean;
  extraTopping?: boolean;
  price: number;
  quantity: number;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  sentiment: string;
  tag: string;
  date: string;
}
