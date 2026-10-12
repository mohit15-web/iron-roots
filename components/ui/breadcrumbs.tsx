import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-charcoal/60">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-charcoal transition-colors">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            {item.href ? (
              <Link href={item.href} className="hover:text-charcoal transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-charcoal">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
