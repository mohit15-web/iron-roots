import Image from "next/image";
import { img, IMAGES } from "@/lib/images";
import { LinkButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CommercialCta() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <Image
        src={img(IMAGES.commercial, 1920)}
        alt="A modern office interior with planted dividers and indoor greenery"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="relative z-10 flex h-full items-center">
        <Reveal className="mx-auto w-full max-w-(--container-page) px-6 lg:px-12">
          <p className="eyebrow text-white/80 mb-4">GREEN SPACES, THOUGHTFULLY DESIGNED</p>
          <h2 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight max-w-xl text-balance">
            A greener way to work.
          </h2>
          <p className="mt-5 max-w-md text-white/85 leading-relaxed">
            Bring your workspace to life with considered planting, biophilic
            design, and greenery tailored to your environment.
          </p>
          <LinkButton href="/commercial-spaces" variant="inverse" className="mt-8 inline-flex">
            Discuss Your Project
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
