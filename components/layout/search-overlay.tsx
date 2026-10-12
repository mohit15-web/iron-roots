"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/shop?q=${encodeURIComponent(trimmed)}`);
    onClose();
    setQuery("");
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div onClick={onClose} className="absolute inset-0 bg-charcoal/40" />
      <div className="absolute top-0 left-0 right-0 bg-ivory border-b border-charcoal/10 shadow-lg">
        <form
          onSubmit={onSubmit}
          className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-8 flex items-center gap-4"
        >
          <Search className="h-5 w-5 text-charcoal/50 shrink-0" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search planters, soil, décor..."
            aria-label="Search products"
            className="flex-1 bg-transparent font-serif text-2xl sm:text-3xl placeholder:text-charcoal/30 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="p-2 text-charcoal hover:text-terracotta transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
