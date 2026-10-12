"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Drawer } from "@/components/ui/drawer";
import { LinkButton } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <Drawer open={isDrawerOpen} onClose={closeDrawer} title="Your Bag">
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full px-6 text-center gap-4">
          <p className="text-charcoal/60">Your bag is empty.</p>
          <LinkButton href="/shop" variant="primary" onClick={closeDrawer}>
            Continue Shopping
          </LinkButton>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <ul className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
            {items.map((item) => (
              <li
                key={`${item.slug}-${item.color}-${item.size}`}
                className="flex gap-4"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[6px] bg-sand">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={closeDrawer}
                      className="font-medium text-charcoal hover:text-forest transition-colors line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => removeItem(item.slug, item.color, item.size)}
                      aria-label={`Remove ${item.name}`}
                      className="text-charcoal/40 hover:text-terracotta transition-colors shrink-0"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {(item.color || item.size) && (
                    <p className="text-xs text-charcoal/50 mt-0.5">
                      {[item.color, item.size].filter(Boolean).join(" / ")}
                    </p>
                  )}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-charcoal/20 rounded-[4px]">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.slug,
                            item.quantity - 1,
                            item.color,
                            item.size,
                          )
                        }
                        aria-label="Decrease quantity"
                        className="p-1.5 hover:text-terracotta transition-colors"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.slug,
                            item.quantity + 1,
                            item.color,
                            item.size,
                          )
                        }
                        aria-label="Increase quantity"
                        className="p-1.5 hover:text-terracotta transition-colors"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-charcoal/10 px-5 py-5 space-y-4">
            <div className="flex items-center justify-between text-base font-medium">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-charcoal/50">
              Shipping and taxes calculated at checkout.
            </p>
            <LinkButton
              href="/cart"
              variant="primary"
              onClick={closeDrawer}
              className="w-full"
            >
              View Cart
            </LinkButton>
          </div>
        </div>
      )}
    </Drawer>
  );
}
