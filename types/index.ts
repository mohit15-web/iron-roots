export type CollectionSlug = "planters" | "soil-plant-care" | "garden-decor";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  collection: CollectionSlug;
  price: number;
  compareAtPrice?: number;
  images: string[];
  description: string;
  specifications: { label: string; value: string }[];
  careInstructions?: string;
  shippingInfo: string;
  colors?: ProductColor[];
  sizes?: string[];
  material?: string;
  inStock: boolean;
  featured?: boolean;
  bestseller?: boolean;
  isNew?: boolean;
  tags: string[];
}

export interface Collection {
  slug: CollectionSlug;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  color?: string;
  size?: string;
  quantity: number;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  readingTime: string;
  publishedAt: string;
}

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";
