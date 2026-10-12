import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { getCollection } from "@/data/collections";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductOptions } from "@/components/products/product-options";
import { ProductCard } from "@/components/products/product-card";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const collection = getCollection(product.collection);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { label: collection?.title ?? "Shop", href: `/collections/${product.collection}` },
          { label: product.name },
        ]}
      />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <p className="eyebrow text-charcoal/50">{product.category}</p>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal mt-1">
            {product.name}
          </h1>

          <div className="mt-6">
            <ProductOptions product={product} />
          </div>

          <p className="mt-8 text-charcoal/75 leading-relaxed max-w-prose">
            {product.description}
          </p>

          <div className="mt-8">
            <Accordion
              items={[
                {
                  title: "Specifications",
                  content: (
                    <dl className="space-y-1.5">
                      {product.specifications.map((spec) => (
                        <div key={spec.label} className="flex justify-between gap-4">
                          <dt className="text-charcoal/50">{spec.label}</dt>
                          <dd className="text-charcoal text-right">{spec.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ),
                },
                ...(product.careInstructions
                  ? [{ title: "Care Instructions", content: product.careInstructions }]
                  : []),
                { title: "Shipping & Returns", content: product.shippingInfo },
              ]}
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <SectionHeading title="You may also like" />
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
