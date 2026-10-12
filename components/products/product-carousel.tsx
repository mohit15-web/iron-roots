"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/types";
import { ProductCard } from "@/components/products/product-card";

export function ProductCarousel({ products }: { products: Product[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        role="list"
      >
        {products.map((product) => (
          <div
            key={product.id}
            role="listitem"
            className="w-[75%] sm:w-[42%] lg:w-[23%] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Previous products"
        className="hidden sm:flex absolute -left-4 top-[35%] -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-charcoal/10 shadow-sm hover:border-forest transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Next products"
        className="hidden sm:flex absolute -right-4 top-[35%] -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white border border-charcoal/10 shadow-sm hover:border-forest transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
