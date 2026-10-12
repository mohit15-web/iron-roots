import { Suspense } from "react";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGrid } from "@/components/collections/product-grid";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse the full Verdant Living catalogue of planters, soil and plant care, and garden décor.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Shop All" }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4">Shop All</h1>
      <p className="mt-3 max-w-xl text-charcoal/65 leading-relaxed">
        Every planter, growing essential, and garden object from the Verdant
        Living catalogue in one place.
      </p>
      <div className="mt-10">
        <Suspense fallback={null}>
          <ProductGrid products={products} />
        </Suspense>
      </div>
    </div>
  );
}
