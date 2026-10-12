import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Verdant Living team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4">Get in Touch</h1>
      <p className="mt-3 max-w-xl text-charcoal/65 leading-relaxed">
        Questions about an order, a product, or a commercial project? Send us
        a message and we&apos;ll get back to you.
      </p>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-forest shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-charcoal">Email (demo)</p>
              <p className="text-charcoal/65 text-sm">hello@verdantliving.example</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-forest shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-charcoal">Phone (demo)</p>
              <p className="text-charcoal/65 text-sm">+91 00000 00000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-forest shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-charcoal">Studio (demo)</p>
              <p className="text-charcoal/65 text-sm">Bengaluru, India</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
