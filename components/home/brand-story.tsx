import Image from "next/image";
import { img, IMAGES } from "@/lib/images";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function BrandStory() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden rounded-[10px] order-2 lg:order-1">
          <Image
            src={img(IMAGES.story, 1200)}
            alt="A warmly lit living space with a large floor planter and natural textures"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={100}>
          <p className="eyebrow text-terracotta mb-4">DESIGNED AROUND EVERYDAY LIVING</p>
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-charcoal text-balance">
            Make room for a little more green.
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed max-w-md">
            From a quiet balcony corner to a beautifully considered living
            space, the right details make room for nature in everyday life.
            Discover thoughtfully selected pieces that bring texture, warmth,
            and life to your surroundings.
          </p>
          <LinkButton href="/about" variant="secondary" className="mt-8 inline-flex">
            Discover Our Story
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
