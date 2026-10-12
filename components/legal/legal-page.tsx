import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-12 py-10 sm:py-14">
      <Breadcrumbs items={[{ label: title }]} />
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mt-4">{title}</h1>
      <p className="mt-3 text-sm text-charcoal/50">Last updated {updated}</p>
      <p className="mt-6 text-sm text-charcoal/60 bg-sand rounded-[6px] p-4">
        This page contains placeholder policy content for this demo store and
        should be replaced with your business&apos;s actual terms before launch.
      </p>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-serif text-2xl text-charcoal mb-3">{section.heading}</h2>
            <div className="space-y-4">
              {section.body.map((p, i) => (
                <p key={i} className="text-charcoal/75 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
