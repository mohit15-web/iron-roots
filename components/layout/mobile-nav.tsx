"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Drawer } from "@/components/ui/drawer";
import { primaryNav } from "@/data/navigation";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer open={open} onClose={onClose} side="left" title="Menu">
      <nav className="flex flex-col px-5 py-4">
        {primaryNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="py-3.5 border-b border-charcoal/10 text-lg font-serif text-charcoal hover:text-forest transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </Drawer>
  );
}
