"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartItem } from "@/types";

const STORAGE_KEY = "verdant-living-cart";

interface CartContextValue {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, color?: string, size?: string) => void;
  updateQuantity: (
    slug: string,
    quantity: number,
    color?: string,
    size?: string,
  ) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function sameLine(a: CartItem, slug: string, color?: string, size?: string) {
  return a.slug === slug && a.color === color && a.size === size;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage on mount
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore corrupt storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((p) =>
        sameLine(p, item.slug, item.color, item.size),
      );
      if (existing) {
        return prev.map((p) =>
          sameLine(p, item.slug, item.color, item.size)
            ? { ...p, quantity: p.quantity + item.quantity }
            : p,
        );
      }
      return [...prev, item];
    });
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback(
    (slug: string, color?: string, size?: string) => {
      setItems((prev) => prev.filter((p) => !sameLine(p, slug, color, size)));
    },
    [],
  );

  const updateQuantity = useCallback(
    (slug: string, quantity: number, color?: string, size?: string) => {
      setItems((prev) =>
        prev
          .map((p) =>
            sameLine(p, slug, color, size) ? { ...p, quantity } : p,
          )
          .filter((p) => p.quantity > 0),
      );
    },
    [],
  );

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
