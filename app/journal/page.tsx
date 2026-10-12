import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Journal",
  description: "Gardening guides, plant care tips, and inspiration from Verdant Living.",
};

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Journal" }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4">
        A little guidance. A lot of growth.
      </h1>
      <p className="mt-3 max-w-xl text-charcoal/65 leading-relaxed">
        Gardening guides, plant care tips, and inspiration for greener everyday spaces.
      </p>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article) => (
          <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <p className="eyebrow text-terracotta mt-5 mb-2">{article.category}</p>
            <h2 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">{article.excerpt}</p>
            <div className="mt-3 flex items-center gap-3 text-xs text-charcoal/50">
              <span>{article.readingTime}</span>
              <span aria-hidden>·</span>
              <span className="text-forest font-medium">Read article</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
