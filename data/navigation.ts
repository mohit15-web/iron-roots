import { collections } from "@/data/collections";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavCategory {
  label: string;
  href: string;
  description: string;
  image: string;
  links: NavLink[];
}

const subLinks: Record<string, NavLink[]> = {
  planters: [
    { label: "Indoor Planters", href: "/collections/planters?category=Indoor+Planter" },
    { label: "Outdoor Planters", href: "/collections/planters?category=Outdoor+Planter" },
    { label: "Balcony Planters", href: "/collections/planters?category=Balcony+Planter" },
    { label: "Hanging Planters", href: "/collections/planters?category=Hanging+Planter" },
  ],
  "soil-plant-care": [
    { label: "Growing Media", href: "/collections/soil-plant-care?category=Growing+Media" },
    { label: "Soil Amendments", href: "/collections/soil-plant-care?category=Soil+Amendment" },
    { label: "Plant Nutrition", href: "/collections/soil-plant-care?category=Plant+Nutrition" },
  ],
  "garden-decor": [
    { label: "Watering Accessories", href: "/collections/garden-decor?category=Watering+Accessory" },
    { label: "Garden Objects", href: "/collections/garden-decor?category=Garden+Object" },
    { label: "Gardening Accessories", href: "/collections/garden-decor?category=Gardening+Accessory" },
  ],
};

export const megaMenuCategories: NavCategory[] = collections.map((c) => ({
  label: c.shortTitle,
  href: `/collections/${c.slug}`,
  description: c.description,
  image: c.image,
  links: subLinks[c.slug] ?? [],
}));

export const primaryNav: NavLink[] = [
  { label: "Shop All", href: "/shop" },
  { label: "Planters", href: "/collections/planters" },
  { label: "Soil & Plant Care", href: "/collections/soil-plant-care" },
  { label: "Garden Décor", href: "/collections/garden-decor" },
  { label: "Our Story", href: "/about" },
  { label: "Commercial Spaces", href: "/commercial-spaces" },
];

export const footerShopLinks: NavLink[] = [
  { label: "Shop All", href: "/shop" },
  { label: "Planters", href: "/collections/planters" },
  { label: "Soil & Plant Care", href: "/collections/soil-plant-care" },
  { label: "Garden Décor", href: "/collections/garden-decor" },
];

export const footerSupportLinks: NavLink[] = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export const footerCompanyLinks: NavLink[] = [
  { label: "Our Story", href: "/about" },
  { label: "Commercial Spaces", href: "/commercial-spaces" },
  { label: "Gardening Journal", href: "/journal" },
];
