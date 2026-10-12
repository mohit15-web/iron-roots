import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Reveal } from "@/components/ui/reveal";

export function NewsletterSection() {
  return (
    <section className="bg-forest">
      <Reveal className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-24 flex flex-col items-center text-center">
        <h2 className="font-serif text-white text-3xl sm:text-4xl text-balance">
          A little more green in your inbox.
        </h2>
        <p className="mt-4 max-w-md text-ivory/80 leading-relaxed">
          Gardening ideas, thoughtful finds, and inspiration for greener
          everyday spaces.
        </p>
        <div className="mt-8">
          <NewsletterForm variant="dark" />
        </div>
      </Reveal>
    </section>
  );
}
