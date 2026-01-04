// types/index.ts - Add these new types

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

// New types for offers and events
export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discount?: string;
  originalPrice?: number;
  offerPrice?: number;
  image: string;
  validUntil: string;
  terms?: string;
  badge?: string;
  type: "discount" | "combo" | "seasonal" | "happy-hour";
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  location?: string;
  price?: number;
  isFree?: boolean;
  spotsLeft?: number;
  tags?: string[];
}