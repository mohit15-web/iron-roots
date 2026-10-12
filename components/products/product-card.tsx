"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/context/toast-context";
import { useWishlist } from "@/hooks/use-wishlist";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const showToast = useToast();
  const { toggle, isSaved } = useWishlist();
  const hasOptions = Boolean(product.colors?.length || product.sizes?.length);
  const saved = isSaved(product.slug);

  function quickAdd() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      price: product.price,
      quantity: 1,
    });
    showToast(`${product.name} added to your bag`);
  }

  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-sand">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
            className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
              className="object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />
          )}
        </Link>
        <button
          onClick={() => toggle(product.slug)}
          aria-pressed={saved}
          aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-charcoal hover:text-terracotta transition-colors"
        >
          <Heart className={cn("h-4 w-4", saved && "fill-terracotta text-terracotta")} />
        </button>
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-charcoal text-white text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-[4px]">
            Sold Out
          </span>
        )}
        {product.isNew && product.inStock && (
          <span className="absolute top-3 left-3 bg-forest text-white text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-[4px]">
            New
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="eyebrow text-charcoal/50">{product.category}</p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-1 font-serif text-lg text-charcoal hover:text-forest transition-colors"
        >
          {product.name}
        </Link>

        {product.colors && (
          <div className="mt-2 flex items-center gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-3.5 w-3.5 rounded-full border border-charcoal/15"
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}

        <div className="mt-2 flex items-center gap-2">
          <span className="font-medium text-charcoal">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-charcoal/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <div className="mt-3">
          {hasOptions || !product.inStock ? (
            <Link
              href={`/products/${product.slug}`}
              className="inline-block text-sm font-medium text-forest hover:text-charcoal transition-colors"
            >
              {product.inStock ? "Choose Options" : "Enquire About This Product"}
            </Link>
          ) : (
            <button
              onClick={quickAdd}
              className="text-sm font-medium text-forest hover:text-charcoal transition-colors"
            >
              Quick Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
