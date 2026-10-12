import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Accordion } from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Verdant Living products, shipping, and care.",
};

const faqs = [
  {
    title: "Do you ship outside India?",
    content: "This preview store currently ships within India only. International shipping isn't configured yet.",
  },
  {
    title: "How long does delivery take?",
    content: "Most in-stock items ship within 2–5 business days, with larger outdoor planters taking slightly longer. Exact timelines are shown on each product page.",
  },
  {
    title: "Can I return a product?",
    content: "See our Shipping & Returns page for the full policy. Items must be unused and in their original packaging.",
  },
  {
    title: "How do I know which planter size to choose?",
    content: "Our Journal article \"Choosing the Right Planter for Your Space\" covers sizing, drainage, and material in more detail.",
  },
  {
    title: "Do you offer commercial or bulk orders?",
    content: "Yes — visit our Commercial Spaces page to share your project details and our team will follow up.",
  },
  {
    title: "Is this a live store?",
    content: "This site is a frontend preview. Cart and checkout flows are functional for demonstration, but no real orders or payments are processed.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "FAQ" }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4 mb-10">
        Frequently Asked Questions
      </h1>
      <Accordion items={faqs} />
    </div>
  );
}
