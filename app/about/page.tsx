import Image from "next/image";
import type { Metadata } from "next";
import { img, IMAGES } from "@/lib/images";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Verdant Living is a design-conscious garden and lifestyle brand built around everyday greenery.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 pt-10">
        <Breadcrumbs items={[{ label: "Our Story" }]} />
      </div>

      <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-16">
        <p className="eyebrow text-terracotta mb-4">OUR STORY</p>
        <h1 className="font-serif text-4xl sm:text-6xl leading-tight max-w-3xl text-balance text-charcoal">
          We believe every space deserves a little more green.
        </h1>
        <p className="mt-6 max-w-xl text-charcoal/70 leading-relaxed">
          Verdant Living started with a simple observation: the objects we
          bring greenery home in matter just as much as the plants
          themselves. We design and curate planters, growing essentials, and
          garden details for people who care about both.
        </p>
      </section>

      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={img(IMAGES.about1, 1920)}
          alt="A plant-filled interior corner with natural light"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
          <Image
            src={img(IMAGES.about2, 1200)}
            alt="A considered shelf arrangement of ceramic planters"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow text-terracotta mb-4">WHAT WE VALUE</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-balance">
            Thoughtful design, honest materials.
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed max-w-md">
            Every piece we carry is chosen for how it ages, not just how it
            photographs. We favour natural, durable materials — fired
            ceramic, solid metal, cast stone — over trend-driven design that
            doesn&apos;t hold up to daily life.
          </p>
          <p className="mt-4 text-charcoal/70 leading-relaxed max-w-md">
            Beyond the shop, we work with homeowners, designers, and
            businesses to bring considered greenery into the spaces people
            spend their days in.
          </p>
        </Reveal>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-16 flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-balance">
            Ready to find your kind of green?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton href="/shop" variant="primary">
              Explore the Collection
            </LinkButton>
            <LinkButton href="/commercial-spaces" variant="secondary">
              Commercial Spaces
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
