export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  image: string;
  externalLink: string;
  specs: Record<string, string>;
  inStock: boolean;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  brand: string;
  inStock: boolean;
}

export type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | 'name-asc';