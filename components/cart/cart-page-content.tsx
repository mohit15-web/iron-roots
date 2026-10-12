"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, Info } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { LinkButton, Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function CartPageContent() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);

  if (items.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-3xl text-charcoal mb-3">Your bag is empty</p>
        <p className="text-charcoal/60 mb-8">
          Explore the collection and find something for your space.
        </p>
        <LinkButton href="/shop" variant="primary">
          Continue Shopping
        </LinkButton>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
      <ul className="divide-y divide-charcoal/10">
        {items.map((item) => (
          <li key={`${item.slug}-${item.color}-${item.size}`} className="flex gap-5 py-6">
            <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-[8px] bg-sand">
              <Image src={item.image} alt={item.name} fill sizes="112px" className="object-cover" />
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-serif text-xl text-charcoal hover:text-forest transition-colors"
                  >
                    {item.name}
                  </Link>
                  {(item.color || item.size) && (
                    <p className="text-sm text-charcoal/50 mt-1">
                      {[item.color, item.size].filter(Boolean).join(" / ")}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => removeItem(item.slug, item.color, item.size)}
                  aria-label={`Remove ${item.name}`}
                  className="text-charcoal/40 hover:text-terracotta transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <div className="flex items-center border border-charcoal/20 rounded-[4px]">
                  <button
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity - 1, item.color, item.size)
                    }
                    aria-label="Decrease quantity"
                    className="p-2.5 hover:text-terracotta transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.slug, item.quantity + 1, item.color, item.size)
                    }
                    aria-label="Increase quantity"
                    className="p-2.5 hover:text-terracotta transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="font-medium text-charcoal">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="h-fit border border-charcoal/10 rounded-[10px] p-6">
        <h2 className="font-serif text-2xl text-charcoal mb-5">Order Summary</h2>
        <div className="flex items-center justify-between text-charcoal/70 mb-2">
          <span>Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <p className="text-xs text-charcoal/50 mb-5">
          Shipping and taxes calculated at checkout.
        </p>
        <Button
          onClick={() => setShowCheckoutNotice(true)}
          variant="primary"
          className="w-full"
        >
          Checkout
        </Button>
        {showCheckoutNotice && (
          <p className="mt-4 flex items-start gap-2 text-xs text-charcoal/60 bg-sand rounded-[6px] p-3">
            <Info className="h-4 w-4 shrink-0 mt-0.5" />
            This is a demo store. Checkout isn&apos;t connected to a real
            payment processor yet, so no order will be placed.
          </p>
        )}
        <Link
          href="/shop"
          className="mt-4 block text-center text-sm font-medium text-forest hover:text-charcoal transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
