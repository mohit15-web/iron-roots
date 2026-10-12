import { Hero } from "@/components/home/hero";
import { ShopByCategory } from "@/components/home/shop-by-category";
import { TheEdit } from "@/components/home/the-edit";
import { BrandStory } from "@/components/home/brand-story";
import { Bestsellers } from "@/components/home/bestsellers";
import { CommercialCta } from "@/components/home/commercial-cta";
import { JournalPreview } from "@/components/home/journal-preview";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <TheEdit />
      <BrandStory />
      <Bestsellers />
      <CommercialCta />
      <JournalPreview />
      <NewsletterSection />
    </>
  );
}
