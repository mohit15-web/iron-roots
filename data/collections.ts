import { img, IMAGES } from "@/lib/images";
import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    slug: "planters",
    title: "Planters",
    shortTitle: "Planters",
    description:
      "Indoor, outdoor, balcony, hanging, and designer planters shaped for considered spaces.",
    image: img(IMAGES.categoryPlanters, 1200),
  },
  {
    slug: "soil-plant-care",
    title: "Soil & Plant Care",
    shortTitle: "Soil & Plant Care",
    description:
      "Growing media, soil amendments, and plant nutrition for healthier green spaces.",
    image: img(IMAGES.categorySoil, 1200),
  },
  {
    slug: "garden-decor",
    title: "Garden Décor",
    shortTitle: "Garden Décor",
    description:
      "Rain chains, watering accessories, and decorative objects for the garden.",
    image: img(IMAGES.categoryDecor, 1200),
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
