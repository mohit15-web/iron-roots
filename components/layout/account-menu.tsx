"use client";

import { useEffect, useRef, useState } from "react";

export function AccountMenu({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Account"
      >
        {children}
      </button>
      {open && (
        <div
          role="dialog"
          aria-label="Account"
          className="absolute right-0 top-full mt-2 w-64 rounded-[6px] border border-charcoal/10 bg-white p-4 shadow-lg text-sm"
        >
          <p className="font-medium text-charcoal mb-1">Accounts coming soon</p>
          <p className="text-charcoal/60">
            Sign-in isn&apos;t part of this preview yet. You can browse and
            check out as a guest in the meantime.
          </p>
        </div>
      )}
    </div>
  );
}
