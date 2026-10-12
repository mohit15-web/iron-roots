"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import type { Product } from "@/types";
import {
  applyFilters,
  getFacets,
  PRICE_RANGES,
  type ProductFilters,
} from "@/lib/filter-products";
import { ProductCard } from "@/components/products/product-card";
import { FilterPanel } from "@/components/collections/filter-panel";
import { Drawer } from "@/components/ui/drawer";

const LIST_KEYS = ["categories", "priceRanges", "colors", "sizes", "materials"] as const;
type ListKey = (typeof LIST_KEYS)[number];

function parseFilters(params: URLSearchParams): ProductFilters {
  const list = (key: string) =>
    params.get(key) ? params.get(key)!.split(",").filter(Boolean) : [];
  return {
    categories: list("category"),
    priceRanges: list("price"),
    colors: list("color"),
    sizes: list("size"),
    materials: list("material"),
    availability: (params.get("availability") as ProductFilters["availability"]) || "all",
    sort: (params.get("sort") as ProductFilters["sort"]) || "featured",
    q: params.get("q") || "",
  };
}

const paramKey: Record<ListKey, string> = {
  categories: "category",
  priceRanges: "price",
  colors: "color",
  sizes: "size",
  materials: "material",
};

const labelFor: Record<ListKey, (value: string) => string> = {
  categories: (v) => v,
  priceRanges: (v) => PRICE_RANGES.find((r) => r.key === v)?.label ?? v,
  colors: (v) => v,
  sizes: (v) => v,
  materials: (v) => v,
};

export function ProductGrid({ products }: { products: Product[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filters = useMemo(() => parseFilters(searchParams), [searchParams]);
  const facets = useMemo(() => getFacets(products), [products]);
  const results = useMemo(() => applyFilters(products, filters), [products, filters]);

  function updateParams(mutate: (params: URLSearchParams) => void) {
    const params = new URLSearchParams(searchParams.toString());
    mutate(params);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  function toggleListValue(key: ListKey, value: string) {
    updateParams((params) => {
      const current = params.get(paramKey[key])?.split(",").filter(Boolean) ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      if (next.length) params.set(paramKey[key], next.join(","));
      else params.delete(paramKey[key]);
    });
  }

  function setAvailability(value: ProductFilters["availability"]) {
    updateParams((params) => {
      if (value === "all") params.delete("availability");
      else params.set("availability", value);
    });
  }

  function setSort(value: ProductFilters["sort"]) {
    updateParams((params) => {
      if (value === "featured") params.delete("sort");
      else params.set("sort", value);
    });
  }

  function clearAll() {
    router.replace("?", { scroll: false });
  }

  const activeChips: { key: ListKey | "availability"; value: string; label: string }[] = [
    ...LIST_KEYS.flatMap((key) =>
      filters[key].map((value) => ({ key, value, label: labelFor[key](value) })),
    ),
    ...(filters.availability !== "all"
      ? [
          {
            key: "availability" as const,
            value: filters.availability,
            label: filters.availability === "in-stock" ? "In Stock" : "Sold Out",
          },
        ]
      : []),
  ];

  const hasActiveFilters = activeChips.length > 0;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal/10">
        <p className="text-sm text-charcoal/60">
          {results.length} {results.length === 1 ? "product" : "products"}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 text-sm font-medium border border-charcoal/20 rounded-[4px] px-4 py-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <label className="flex items-center gap-2 text-sm">
            <span className="sr-only">Sort by</span>
            <select
              value={filters.sort}
              onChange={(e) => setSort(e.target.value as ProductFilters["sort"])}
              className="border border-charcoal/20 rounded-[4px] px-3 py-2 bg-white text-charcoal focus:outline-none focus:border-forest"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 py-4">
          {activeChips.map((chip) => (
            <button
              key={`${chip.key}-${chip.value}`}
              onClick={() =>
                chip.key === "availability"
                  ? setAvailability("all")
                  : toggleListValue(chip.key, chip.value)
              }
              className="inline-flex items-center gap-1.5 text-xs bg-sand text-charcoal px-3 py-1.5 rounded-full hover:bg-charcoal hover:text-white transition-colors"
            >
              {chip.label}
              <X className="h-3 w-3" />
            </button>
          ))}
          <button
            onClick={clearAll}
            className="text-xs font-medium text-terracotta hover:text-charcoal transition-colors ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      <div className="mt-2 grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10">
        <aside className="hidden lg:block">
          <FilterPanel
            facets={facets}
            filters={filters}
            onToggle={toggleListValue}
            onAvailabilityChange={setAvailability}
          />
        </aside>

        <div>
          {results.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-serif text-2xl text-charcoal mb-2">No products match</p>
              <p className="text-charcoal/60 mb-6">
                Try removing a filter or searching for something else.
              </p>
              <button
                onClick={clearAll}
                className="text-sm font-medium text-forest hover:text-charcoal transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      <Drawer
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        side="left"
        title="Filters"
      >
        <div className="px-5">
          <FilterPanel
            facets={facets}
            filters={filters}
            onToggle={toggleListValue}
            onAvailabilityChange={setAvailability}
          />
        </div>
        <div className="sticky bottom-0 bg-ivory border-t border-charcoal/10 p-5">
          <button
            onClick={clearAll}
            className="w-full text-center text-sm font-medium text-terracotta py-2"
          >
            Clear all filters
          </button>
        </div>
      </Drawer>
    </div>
  );
}
