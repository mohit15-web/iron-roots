"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: string;
  children: React.ReactNode;
}

export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
}: DrawerProps) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-charcoal/40 transition-opacity duration-300 ease-in-out",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "absolute top-0 h-full w-full max-w-sm bg-ivory shadow-xl transition-transform duration-300 ease-in-out flex flex-col",
          side === "right" ? "right-0" : "left-0",
          open
            ? "translate-x-0"
            : side === "right"
              ? "translate-x-full"
              : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-charcoal/10">
          {title ? (
            <h2 className="font-serif text-xl text-charcoal">{title}</h2>
          ) : (
            <span />
          )}
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 -mr-2 text-charcoal hover:text-terracotta transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
