import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/data/collections";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function ShopByCategory() {
  return (
    <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
      <Reveal>
        <SectionHeading
          title="Find your kind of green."
          description="Start with the details that bring your space to life."
        />
      </Reveal>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {collections.map((collection, i) => (
          <Reveal key={collection.slug} delay={i * 100}>
            <Link
              href={`/collections/${collection.slug}`}
              className="group block focus:outline-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[10px]">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-charcoal">
                {collection.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/65 leading-relaxed max-w-sm">
                {collection.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest">
                Explore category
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
