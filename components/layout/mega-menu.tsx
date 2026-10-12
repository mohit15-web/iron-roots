import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NavCategory } from "@/data/navigation";

export function MegaMenu({ category }: { category: NavCategory }) {
  return (
    <div className="absolute left-0 top-full w-full border-t border-charcoal/10 bg-ivory shadow-lg">
      <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 grid grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <p className="eyebrow text-terracotta mb-4">{category.label}</p>
          <ul className="space-y-3">
            {category.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-charcoal/80 hover:text-forest transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={category.href}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-forest group"
          >
            Shop all {category.label.toLowerCase()}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <Link
          href={category.href}
          className="relative block aspect-[16/9] overflow-hidden rounded-[10px] group"
        >
          <Image
            src={category.image}
            alt={category.label}
            fill
            sizes="40vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/10" />
          <p className="absolute bottom-4 left-4 text-white font-serif text-xl">
            {category.description}
          </p>
        </Link>
      </div>
    </div>
  );
}
