"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, Sprout, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/cart-context";
import { primaryNav, megaMenuCategories } from "@/data/navigation";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { SearchOverlay } from "@/components/layout/search-overlay";
import { AccountMenu } from "@/components/layout/account-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 bg-ivory/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled ? "shadow-sm border-b border-charcoal/10" : "border-b border-transparent",
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div
        className={cn(
          "mx-auto max-w-(--container-page) px-6 lg:px-12 flex items-center justify-between transition-[padding] duration-300",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="lg:hidden p-2 -ml-2 text-charcoal"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-xl sm:text-2xl tracking-wide text-forest"
        >
          <Sprout className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
          VERDANT LIVING
        </Link>

        <nav className="hidden lg:flex items-center gap-8 relative">
          {primaryNav.map((link) => {
            const category = megaMenuCategories.find((c) => c.href === link.href);
            return (
              <div
                key={link.href}
                onMouseEnter={() => setActiveMenu(category ? link.href : null)}
                onFocus={() => setActiveMenu(category ? link.href : null)}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-charcoal py-2 group"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-forest transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className="p-2 text-charcoal hover:text-forest transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <AccountMenu>
            <span className="p-2 text-charcoal hover:text-forest transition-colors inline-flex">
              <User className="h-5 w-5" />
            </span>
          </AccountMenu>
          <button
            onClick={openDrawer}
            aria-label={`Open cart, ${itemCount} items`}
            className="relative p-2 text-charcoal hover:text-forest transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span
                key={itemCount}
                className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-medium text-white"
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {activeMenu && (
        <MegaMenu
          category={megaMenuCategories.find((c) => c.href === activeMenu)!}
        />
      )}

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
