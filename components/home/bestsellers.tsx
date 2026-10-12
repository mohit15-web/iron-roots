import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bestsellerProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/products/product-card";
import { Reveal } from "@/components/ui/reveal";

export function Bestsellers() {
  const items = bestsellerProducts.slice(0, 8);
  return (
    <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
      <Reveal>
        <SectionHeading title="Loved by plant people." />
      </Reveal>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {items.map((product, i) => (
          <Reveal key={product.id} delay={(i % 4) * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-charcoal transition-colors group"
        >
          Explore all products
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
