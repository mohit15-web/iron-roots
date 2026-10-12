import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { img, IMAGES } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      <Image
        src={img(IMAGES.hero, 1920)}
        alt="A sunlit contemporary living room filled with sculptural planters and lush greenery"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-(--container-page) px-6 lg:px-12 pb-16 sm:pb-20">
          <p className="eyebrow text-white/80 mb-4">OBJECTS FOR A GREENER EVERYDAY</p>
          <h1 className="font-serif text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] max-w-2xl text-balance">
            A little nature. A lot of character.
          </h1>
          <p className="mt-5 max-w-md text-white/85 leading-relaxed">
            Thoughtfully chosen planters, growing essentials, and garden
            details for spaces that feel more like you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/shop" variant="primary">
              Explore the Collection
            </LinkButton>
            <LinkButton href="/about" variant="inverse">
              Discover Our World
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
