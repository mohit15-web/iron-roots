import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Shipping & Returns" };

export default function ShippingReturnsPage() {
  return (
    <LegalPage
      title="Shipping & Returns"
      updated="12 October 2026"
      sections={[
        {
          heading: "Shipping",
          body: [
            "Estimated shipping timelines are shown on each product page and typically range from 2–7 business days depending on the item's size and weight.",
          ],
        },
        {
          heading: "Returns",
          body: [
            "Unused items in their original packaging can typically be returned within a reasonable window of delivery. Exact timelines and conditions would be finalised before this store goes live.",
          ],
        },
        {
          heading: "Damaged or Incorrect Items",
          body: [
            "If an item arrives damaged or incorrect, contact our team with your order details so it can be resolved.",
          ],
        },
      ]}
    />
  );
}
