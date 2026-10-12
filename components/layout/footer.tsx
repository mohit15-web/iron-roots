import Link from "next/link";
import { Sprout } from "lucide-react";
import {
  footerShopLinks,
  footerSupportLinks,
  footerCompanyLinks,
} from "@/data/navigation";
import { NewsletterForm } from "@/components/forms/newsletter-form";

function LinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-ivory/60 mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ivory/85 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 font-serif text-xl tracking-wide text-white mb-4">
            <Sprout className="h-5 w-5" aria-hidden />
            VERDANT LIVING
          </div>
          <p className="text-sm text-ivory/70 max-w-xs leading-relaxed mb-6">
            Thoughtfully designed planters, growing essentials, and garden
            details for spaces that feel more like you.
          </p>
          <p className="eyebrow text-ivory/60 mb-3">A little more green in your inbox</p>
          <NewsletterForm variant="dark" />
        </div>
        <LinkGroup title="Shop" links={footerShopLinks} />
        <LinkGroup title="Company" links={footerCompanyLinks} />
        <LinkGroup title="Support" links={footerSupportLinks} />
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Verdant Living. All rights reserved.</p>
          <p>Demo contact: hello@verdantliving.example · +91 00000 00000</p>
        </div>
      </div>
    </footer>
  );
}
