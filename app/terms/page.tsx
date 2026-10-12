import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="12 October 2026"
      sections={[
        {
          heading: "Use of This Site",
          body: [
            "This site is a demonstration storefront. Browsing, adding items to a cart, and submitting forms are functional for preview purposes only — no real orders are placed and no payments are processed.",
          ],
        },
        {
          heading: "Product Information",
          body: [
            "Products, pricing, and availability shown on this site are seed catalogue data created for demonstration and do not represent real inventory.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "This preview is provided as-is for evaluation purposes and should not be relied upon as a live commercial service.",
          ],
        },
      ]}
    />
  );
}
