import type { Product, SortOption } from "@/types";

export const PRICE_RANGES = [
  { key: "under-1000", label: "Under ₹1,000", min: 0, max: 1000 },
  { key: "1000-2500", label: "₹1,000 – ₹2,500", min: 1000, max: 2500 },
  { key: "2500-5000", label: "₹2,500 – ₹5,000", min: 2500, max: 5000 },
  { key: "over-5000", label: "Over ₹5,000", min: 5000, max: Infinity },
] as const;

export interface ProductFilters {
  categories: string[];
  priceRanges: string[];
  availability: "all" | "in-stock" | "sold-out";
  colors: string[];
  sizes: string[];
  materials: string[];
  sort: SortOption;
  q: string;
}

export const DEFAULT_FILTERS: ProductFilters = {
  categories: [],
  priceRanges: [],
  availability: "all",
  colors: [],
  sizes: [],
  materials: [],
  sort: "featured",
  q: "",
};

export function getFacets(products: Product[]) {
  const categories = Array.from(new Set(products.map((p) => p.category))).sort();
  const colors = Array.from(
    new Set(products.flatMap((p) => p.colors?.map((c) => c.name) ?? [])),
  ).sort();
  const sizes = Array.from(
    new Set(products.flatMap((p) => p.sizes ?? [])),
  ).sort();
  const materials = Array.from(
    new Set(products.map((p) => p.material).filter((m): m is string => Boolean(m))),
  ).sort();
  return { categories, colors, sizes, materials };
}

export function applyFilters(products: Product[], filters: ProductFilters) {
  const q = filters.q.trim().toLowerCase();

  const filtered = products.filter((p) => {
    if (q) {
      const haystack = `${p.name} ${p.category} ${p.description}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (filters.categories.length && !filters.categories.includes(p.category)) {
      return false;
    }
    if (filters.availability === "in-stock" && !p.inStock) return false;
    if (filters.availability === "sold-out" && p.inStock) return false;
    if (filters.colors.length) {
      const productColors = p.colors?.map((c) => c.name) ?? [];
      if (!filters.colors.some((c) => productColors.includes(c))) return false;
    }
    if (filters.sizes.length) {
      if (!filters.sizes.some((s) => p.sizes?.includes(s))) return false;
    }
    if (filters.materials.length) {
      if (!p.material || !filters.materials.includes(p.material)) return false;
    }
    if (filters.priceRanges.length) {
      const ranges = PRICE_RANGES.filter((r) => filters.priceRanges.includes(r.key));
      if (!ranges.some((r) => p.price >= r.min && p.price < r.max)) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (filters.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return Number(b.isNew) - Number(a.isNew);
      case "featured":
      default:
        return Number(b.featured) - Number(a.featured);
    }
  });

  return sorted;
}
