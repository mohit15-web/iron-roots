import Image from "next/image";
import type { Metadata } from "next";
import { Leaf, Users, Sparkles, ClipboardList } from "lucide-react";
import { img, IMAGES } from "@/lib/images";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CommercialEnquiryForm } from "@/components/forms/commercial-enquiry-form";

export const metadata: Metadata = {
  title: "Commercial Spaces",
  description: "Biophilic design and commercial greenery for offices, hospitality, and retail spaces.",
};

const services = [
  {
    icon: Leaf,
    title: "Planting & Greenery",
    description: "Curated indoor and outdoor planting selected for your light, climate, and layout.",
  },
  {
    icon: Sparkles,
    title: "Biophilic Design",
    description: "Living dividers, green walls, and natural materials integrated into interior design.",
  },
  {
    icon: ClipboardList,
    title: "Maintenance Planning",
    description: "Care schedules and plant health guidance tailored to your space and team.",
  },
  {
    icon: Users,
    title: "Design Consultation",
    description: "Working alongside architects and designers from concept through installation.",
  },
];

const process = [
  { step: "01", title: "Enquiry & Site Visit", description: "Share your project details and we'll arrange a walkthrough of the space." },
  { step: "02", title: "Concept & Proposal", description: "A planting and design concept tailored to your layout, light, and budget." },
  { step: "03", title: "Installation", description: "Careful installation of planters, greenery, and any built-in planting features." },
  { step: "04", title: "Ongoing Care", description: "Optional maintenance plans to keep your space thriving long term." },
];

const benefits = [
  "Improved air quality in shared workspaces",
  "A calmer, more considered environment for staff and visitors",
  "Natural acoustic and visual separation between zones",
  "A distinctive, design-led first impression",
];

export default function CommercialSpacesPage() {
  return (
    <div>
      <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 pt-6">
        <Breadcrumbs items={[{ label: "Commercial Spaces" }]} />
      </div>

      <section className="relative mt-6 h-[55vh] min-h-[420px] w-full">
        <Image
          src={img(IMAGES.commercialAlt, 1920)}
          alt="A modern office with greenery integrated into the workspace design"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-(--container-page) px-6 lg:px-12 pb-14">
            <p className="eyebrow text-white/80 mb-4">GREEN SPACES, THOUGHTFULLY DESIGNED</p>
            <h1 className="font-serif text-white text-[clamp(2rem,5vw,3.5rem)] leading-tight max-w-xl text-balance">
              A greener way to work.
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="WHAT WE OFFER"
            title="Commercial greenery, start to finish."
            description="Bring your workspace to life with considered planting, biophilic design, and greenery tailored to your environment."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <service.icon className="h-6 w-6 text-forest mb-4" aria-hidden />
              <h3 className="font-serif text-xl text-charcoal mb-2">{service.title}</h3>
              <p className="text-sm text-charcoal/65 leading-relaxed">{service.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28">
          <Reveal>
            <SectionHeading eyebrow="OUR PROCESS" title="How a project comes together." />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 80}>
                <p className="font-serif text-4xl text-terracotta mb-3">{item.step}</p>
                <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[10px]">
          <Image
            src={img(IMAGES.commercial, 1200)}
            alt="Indoor planting used as a natural divider in an office"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow text-terracotta mb-4">WHY BIOPHILIC DESIGN</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-balance">
            Spaces that feel better to be in.
          </h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-charcoal/75">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-forest shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-(--container-page) px-6 lg:px-12 pb-20 sm:pb-28">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="GET IN TOUCH" title="Discuss your project." />
          <div className="mt-10">
            <CommercialEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
