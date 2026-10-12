import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collections, getCollection } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGrid } from "@/components/collections/product-grid";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return { title: collection.title, description: collection.description };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const collectionProducts = getProductsByCollection(collection.slug);

  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: collection.title }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4">
        {collection.title}
      </h1>
      <p className="mt-3 max-w-xl text-charcoal/65 leading-relaxed">
        {collection.description}
      </p>
      <div className="mt-10">
        <Suspense fallback={null}>
          <ProductGrid products={collectionProducts} />
        </Suspense>
      </div>
    </div>
  );
}
