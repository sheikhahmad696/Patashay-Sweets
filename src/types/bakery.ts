export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'patashay' | 'khatai' | 'cakes' | 'hampers';
  categoryLabel: string;
  description: string;
  pricePKR: number;
  weight: string;
  pieces?: string;
  image: string;
  badge?: string;
  isSignature?: boolean;
  layers?: number;
  ingredients: string[];
  tasteProfile: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  boxSize?: '500g' | '1kg' | '2kg' | 'single';
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'patashay' | 'craft' | 'boxes' | 'boutique';
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating: number;
  occasion: string;
}
