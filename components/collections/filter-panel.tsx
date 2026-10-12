import { PRICE_RANGES, type ProductFilters } from "@/lib/filter-products";

interface FilterPanelProps {
  facets: {
    categories: string[];
    colors: string[];
    sizes: string[];
    materials: string[];
  };
  filters: ProductFilters;
  onToggle: (
    key: "categories" | "priceRanges" | "colors" | "sizes" | "materials",
    value: string,
  ) => void;
  onAvailabilityChange: (value: ProductFilters["availability"]) => void;
}

function CheckGroup({
  title,
  options,
  selected,
  onChange,
}: {
  title: string;
  options: { key: string; label: string }[];
  selected: string[];
  onChange: (value: string) => void;
}) {
  if (!options.length) return null;
  return (
    <fieldset className="py-5 border-b border-charcoal/10">
      <legend className="eyebrow text-charcoal/50 mb-3">{title}</legend>
      <div className="space-y-2.5">
        {options.map((opt) => (
          <label
            key={opt.key}
            className="flex items-center gap-2.5 text-sm text-charcoal/80 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(opt.key)}
              onChange={() => onChange(opt.key)}
              className="h-4 w-4 rounded-sm border-charcoal/30 text-forest focus:ring-forest accent-forest"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function FilterPanel({ facets, filters, onToggle, onAvailabilityChange }: FilterPanelProps) {
  return (
    <div>
      <CheckGroup
        title="Category"
        options={facets.categories.map((c) => ({ key: c, label: c }))}
        selected={filters.categories}
        onChange={(v) => onToggle("categories", v)}
      />
      <CheckGroup
        title="Price"
        options={PRICE_RANGES.map((r) => ({ key: r.key, label: r.label }))}
        selected={filters.priceRanges}
        onChange={(v) => onToggle("priceRanges", v)}
      />
      <fieldset className="py-5 border-b border-charcoal/10">
        <legend className="eyebrow text-charcoal/50 mb-3">Availability</legend>
        <div className="space-y-2.5">
          {([
            ["all", "All"],
            ["in-stock", "In Stock"],
            ["sold-out", "Sold Out"],
          ] as const).map(([value, label]) => (
            <label key={value} className="flex items-center gap-2.5 text-sm text-charcoal/80 cursor-pointer">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === value}
                onChange={() => onAvailabilityChange(value)}
                className="h-4 w-4 border-charcoal/30 text-forest focus:ring-forest accent-forest"
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>
      <CheckGroup
        title="Material"
        options={facets.materials.map((m) => ({ key: m, label: m }))}
        selected={filters.materials}
        onChange={(v) => onToggle("materials", v)}
      />
      <CheckGroup
        title="Size"
        options={facets.sizes.map((s) => ({ key: s, label: s }))}
        selected={filters.sizes}
        onChange={(v) => onToggle("sizes", v)}
      />
      <CheckGroup
        title="Color"
        options={facets.colors.map((c) => ({ key: c, label: c }))}
        selected={filters.colors}
        onChange={(v) => onToggle("colors", v)}
      />
    </div>
  );
}
