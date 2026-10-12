import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Journal", href: "/journal" }, { label: article.title }]} />
      <p className="eyebrow text-terracotta mt-6 mb-3">{article.category}</p>
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-tight text-balance">
        {article.title}
      </h1>
      <p className="mt-4 text-sm text-charcoal/50">
        {new Date(article.publishedAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        · {article.readingTime}
      </p>

      <div className="relative aspect-[16/9] overflow-hidden rounded-[10px] mt-8">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 768px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10 space-y-6">
        {article.content.map((paragraph, i) => (
          <p key={i} className="text-charcoal/80 leading-relaxed text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
