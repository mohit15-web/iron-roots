import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="12 October 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "When you browse this demo store, we don't collect or store any personal information on a live server — product browsing, the cart, and your wishlist are kept only in your browser's local storage.",
            "Forms on this site (newsletter, contact, and commercial enquiry) are demo flows and do not transmit your information anywhere.",
          ],
        },
        {
          heading: "Cookies & Local Storage",
          body: [
            "This site uses browser local storage to remember your cart and wishlist between visits. No tracking cookies or third-party analytics are used in this preview.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can be directed to the demo contact details listed on our Contact page.",
          ],
        },
      ]}
    />
  );
}
