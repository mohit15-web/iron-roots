import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function JournalPreview() {
  return (
    <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
      <Reveal>
        <SectionHeading title="A little guidance. A lot of growth." />
      </Reveal>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <Reveal key={article.slug} delay={i * 100}>
            <Link href={`/journal/${article.slug}`} className="group block">
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
              <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-charcoal/50">
                <span>{article.readingTime}</span>
                <span aria-hidden>·</span>
                <span className="text-forest font-medium">Read article</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
