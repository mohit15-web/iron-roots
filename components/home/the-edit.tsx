import { products } from "@/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCarousel } from "@/components/products/product-carousel";
import { Reveal } from "@/components/ui/reveal";

export function TheEdit() {
  const edit = products.slice(0, 8);
  return (
    <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
      <Reveal>
        <SectionHeading eyebrow="THE VERDANT EDIT" title="Objects for a greener everyday." />
      </Reveal>
      <div className="mt-12">
        <ProductCarousel products={edit} />
      </div>
    </section>
  );
}
