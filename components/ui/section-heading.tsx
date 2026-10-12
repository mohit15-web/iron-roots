import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-3 text-terracotta">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-charcoal text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
