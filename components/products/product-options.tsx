"use client";

import { useMemo, useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/types";
import { formatPrice, cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/context/toast-context";
import { Button, LinkButton } from "@/components/ui/button";

export function ProductOptions({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors?.[0]?.name);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const showToast = useToast();

  const canAdd = product.inStock;

  const variantLabel = useMemo(
    () => [color, size].filter(Boolean).join(" / "),
    [color, size],
  );

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      price: product.price,
      color,
      size,
      quantity,
    });
    showToast(`${product.name} added to your bag`);
  }

  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-medium text-charcoal">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-base text-charcoal/40 line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </div>
      <p className={cn("mt-2 text-sm font-medium", canAdd ? "text-forest" : "text-terracotta")}>
        {canAdd ? "In Stock" : "Currently Sold Out"}
      </p>

      {product.colors && (
        <div className="mt-6">
          <p className="text-sm font-medium text-charcoal mb-2.5">
            Color{color ? `: ${color}` : ""}
          </p>
          <div className="flex items-center gap-2.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                aria-pressed={color === c.name}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-colors",
                  color === c.name ? "border-forest" : "border-transparent",
                )}
              >
                <span
                  className="block h-full w-full rounded-full border border-charcoal/15"
                  style={{ backgroundColor: c.hex }}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes && (
        <div className="mt-6">
          <p className="text-sm font-medium text-charcoal mb-2.5">
            Size{size ? `: ${size}` : ""}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                aria-pressed={size === s}
                className={cn(
                  "px-4 py-2 text-sm rounded-[4px] border transition-colors",
                  size === s
                    ? "border-forest bg-forest text-white"
                    : "border-charcoal/20 text-charcoal hover:border-charcoal",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6">
        <p className="text-sm font-medium text-charcoal mb-2.5">Quantity</p>
        <div className="inline-flex items-center border border-charcoal/20 rounded-[4px]">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="p-3 hover:text-terracotta transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="p-3 hover:text-terracotta transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {canAdd ? (
        <Button
          onClick={handleAddToCart}
          variant="primary"
          className="mt-8 w-full sm:w-auto sm:min-w-[240px]"
        >
          Add to Cart{variantLabel ? ` — ${variantLabel}` : ""}
        </Button>
      ) : (
        <LinkButton
          href="/contact"
          variant="primary"
          className="mt-8 w-full sm:w-auto sm:min-w-[240px]"
        >
          Enquire About This Product
        </LinkButton>
      )}
    </div>
  );
}
