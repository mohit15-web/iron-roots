import { img, IMAGES } from "@/lib/images";
import type { Product } from "@/types";

const detail = [IMAGES.detailA, IMAGES.detailB, IMAGES.detailC];

const sand = { name: "Sand", hex: "#EAE3D7" };
const charcoal = { name: "Charcoal", hex: "#282A26" };
const terracotta = { name: "Terracotta", hex: "#B96F4E" };
const olive = { name: "Olive", hex: "#56634A" };

export const products: Product[] = [
  {
    id: "p1",
    slug: "bello-sculptural-planter",
    name: "Bello Sculptural Planter",
    category: "Indoor Planter",
    collection: "planters",
    price: 3200,
    images: [img(IMAGES.hero, 1400), img(detail[0], 1400)],
    description:
      "A sculptural, hand-finished planter with a soft matte glaze, designed to anchor a corner or console with quiet presence.",
    specifications: [
      { label: "Material", value: "Fibre clay composite" },
      { label: "Dimensions", value: "28cm × 28cm × 32cm" },
      { label: "Drainage", value: "Pre-drilled with plug" },
    ],
    careInstructions: "Wipe clean with a damp cloth. Not dishwasher safe. Suitable for indoor use only.",
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [sand, charcoal, terracotta],
    sizes: ["Small", "Medium", "Large"],
    material: "Fibre clay composite",
    inStock: true,
    featured: true,
    bestseller: true,
    tags: ["indoor", "designer"],
  },
  {
    id: "p2",
    slug: "milano-tall-planter",
    name: "Milano Tall Planter",
    category: "Indoor Planter",
    collection: "planters",
    price: 4500,
    compareAtPrice: 5200,
    images: [img(IMAGES.categoryPlanters, 1400), img(detail[1], 1400)],
    description:
      "A tall, tapered silhouette built for statement floor plants — fiddle-leaf figs, palms, and olive trees alike.",
    specifications: [
      { label: "Material", value: "Powder-coated steel" },
      { label: "Dimensions", value: "34cm × 34cm × 58cm" },
      { label: "Drainage", value: "Removable base tray" },
    ],
    careInstructions: "Wipe with a dry cloth. Avoid abrasive cleaners on the powder-coat finish.",
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [charcoal, olive],
    sizes: ["Medium", "Large"],
    material: "Powder-coated steel",
    inStock: true,
    featured: true,
    tags: ["indoor", "floor-standing"],
  },
  {
    id: "p3",
    slug: "atlantis-balcony-planter",
    name: "Atlantis Balcony Planter",
    category: "Balcony Planter",
    collection: "planters",
    price: 2100,
    images: [img(IMAGES.categoryDecor, 1400), img(detail[2], 1400)],
    description:
      "A rail-mounted trough planter built for balconies and ledges, with a weatherproof finish for year-round greenery.",
    specifications: [
      { label: "Material", value: "UV-stabilised resin" },
      { label: "Dimensions", value: "60cm × 18cm × 20cm" },
      { label: "Mounting", value: "Adjustable rail brackets included" },
    ],
    careInstructions: "Weatherproof for outdoor use. Hose clean as needed.",
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [sand, terracotta],
    material: "UV-stabilised resin",
    inStock: true,
    bestseller: true,
    tags: ["balcony", "outdoor"],
  },
  {
    id: "p4",
    slug: "terra-round-planter",
    name: "Terra Round Planter",
    category: "Outdoor Planter",
    collection: "planters",
    price: 1800,
    images: [img(IMAGES.detailA, 1400), img(IMAGES.categoryPlanters, 1400)],
    description:
      "A classic terracotta-toned round planter with a weighted base, suited to courtyards, entryways, and patios.",
    specifications: [
      { label: "Material", value: "Weatherproof stoneware" },
      { label: "Dimensions", value: "30cm diameter × 28cm height" },
      { label: "Drainage", value: "Pre-drilled" },
    ],
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [terracotta, charcoal],
    sizes: ["Small", "Medium", "Large"],
    material: "Weatherproof stoneware",
    inStock: true,
    tags: ["outdoor", "classic"],
  },
  {
    id: "p5",
    slug: "nordic-ceramic-planter",
    name: "Nordic Ceramic Planter",
    category: "Indoor Planter",
    collection: "planters",
    price: 2600,
    images: [img(IMAGES.detailB, 1400), img(IMAGES.hero, 1400)],
    description:
      "A minimal ceramic planter with a soft, uneven glaze finish — no two pieces are quite the same.",
    specifications: [
      { label: "Material", value: "Glazed ceramic" },
      { label: "Dimensions", value: "20cm × 20cm × 22cm" },
      { label: "Drainage", value: "Pre-drilled with plug" },
    ],
    careInstructions: "Hand wash only. Keep away from direct heat sources.",
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [sand, olive],
    material: "Glazed ceramic",
    inStock: true,
    isNew: true,
    tags: ["indoor", "ceramic"],
  },
  {
    id: "p6",
    slug: "hanging-rope-planter",
    name: "Hanging Rope Planter",
    category: "Hanging Planter",
    collection: "planters",
    price: 1450,
    images: [img(IMAGES.detailC, 1400), img(IMAGES.categoryDecor, 1400)],
    description:
      "A hand-knotted cotton rope hanger paired with a lightweight ceramic pot, built for windows and balcony eaves.",
    specifications: [
      { label: "Material", value: "Cotton rope, ceramic pot" },
      { label: "Dimensions", value: "16cm pot, 90cm hang length" },
      { label: "Drainage", value: "Pre-drilled with saucer" },
    ],
    shippingInfo: "Ships in 3–5 business days. Free demo shipping label generated at checkout.",
    colors: [sand, terracotta],
    material: "Cotton rope and ceramic",
    inStock: true,
    bestseller: true,
    tags: ["hanging", "balcony"],
  },
  {
    id: "p7",
    slug: "stonecast-outdoor-planter",
    name: "Stonecast Outdoor Planter",
    category: "Outdoor Planter",
    collection: "planters",
    price: 5400,
    images: [img(IMAGES.categoryPlanters, 1400), img(IMAGES.detailA, 1400)],
    description:
      "A substantial cast-stone planter for entryways and courtyards, finished to weather gracefully outdoors.",
    specifications: [
      { label: "Material", value: "Cast stone composite" },
      { label: "Dimensions", value: "42cm × 42cm × 40cm" },
      { label: "Drainage", value: "Pre-drilled" },
    ],
    shippingInfo: "Ships in 5–7 business days due to weight. Free demo shipping label generated at checkout.",
    colors: [charcoal, sand],
    material: "Cast stone composite",
    inStock: false,
    tags: ["outdoor", "statement"],
  },
  {
    id: "p8",
    slug: "natural-cocopeat-block",
    name: "Natural Cocopeat Block",
    category: "Growing Media",
    collection: "soil-plant-care",
    price: 350,
    images: [img(IMAGES.categorySoil, 1400), img(IMAGES.detailB, 1400)],
    description:
      "A compressed coir block that expands into a light, water-retentive growing medium — ideal as a soil amendment or standalone substrate.",
    specifications: [
      { label: "Coverage", value: "Expands to approx. 9 litres" },
      { label: "pH", value: "Buffered, neutral" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    sizes: ["650g Block", "5kg Block"],
    inStock: true,
    bestseller: true,
    tags: ["soil", "coir"],
  },
  {
    id: "p9",
    slug: "perlite-growing-mix",
    name: "Perlite Growing Mix",
    category: "Soil Amendment",
    collection: "soil-plant-care",
    price: 280,
    images: [img(IMAGES.detailC, 1400), img(IMAGES.categorySoil, 1400)],
    description:
      "Lightweight volcanic perlite that improves aeration and drainage in potting mixes, reducing compaction over time.",
    specifications: [
      { label: "Grade", value: "Medium grade, 3–6mm" },
      { label: "Use", value: "Mix 1 part perlite to 4 parts potting soil" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    sizes: ["1L Pack", "5L Pack"],
    inStock: true,
    tags: ["soil", "amendment"],
  },
  {
    id: "p10",
    slug: "vermiculite-soil-conditioner",
    name: "Vermiculite Soil Conditioner",
    category: "Soil Amendment",
    collection: "soil-plant-care",
    price: 300,
    images: [img(IMAGES.detailA, 1400), img(IMAGES.categorySoil, 1400)],
    description:
      "A mineral soil conditioner that improves moisture retention and nutrient exchange, especially useful for seed starting.",
    specifications: [
      { label: "Grade", value: "Fine grade" },
      { label: "Use", value: "Mix 1 part vermiculite to 3 parts potting soil" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    sizes: ["1L Pack", "5L Pack"],
    inStock: true,
    tags: ["soil", "amendment"],
  },
  {
    id: "p11",
    slug: "organic-plant-nutrition-set",
    name: "Organic Plant Nutrition Set",
    category: "Plant Nutrition",
    collection: "soil-plant-care",
    price: 950,
    images: [img(IMAGES.categorySoil, 1400), img(IMAGES.detailB, 1400)],
    description:
      "A three-part organic feeding set covering growth, bloom, and root health for indoor and balcony plants.",
    specifications: [
      { label: "Contents", value: "3 × 250ml concentrate bottles" },
      { label: "Use", value: "Dilute per label, feed every 2 weeks" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    inStock: true,
    isNew: true,
    tags: ["nutrition", "organic"],
  },
  {
    id: "p12",
    slug: "all-purpose-potting-mix",
    name: "All-Purpose Potting Mix",
    category: "Growing Media",
    collection: "soil-plant-care",
    price: 420,
    images: [img(IMAGES.detailC, 1400), img(IMAGES.categorySoil, 1400)],
    description:
      "A ready-to-use potting mix blended with cocopeat, compost, and perlite for most indoor and balcony plants.",
    specifications: [
      { label: "Coverage", value: "8 litre bag" },
      { label: "Blend", value: "Cocopeat, compost, perlite" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    inStock: true,
    bestseller: true,
    tags: ["soil", "potting mix"],
  },
  {
    id: "p13",
    slug: "ripple-watering-can",
    name: "Ripple Watering Can",
    category: "Watering Accessory",
    collection: "garden-decor",
    price: 1600,
    images: [img(IMAGES.detailB, 1400), img(IMAGES.categoryDecor, 1400)],
    description:
      "A softly ribbed, galvanised steel watering can with a long spout for precise watering of indoor plants.",
    specifications: [
      { label: "Material", value: "Galvanised steel" },
      { label: "Capacity", value: "1.5 litres" },
    ],
    careInstructions: "Dry thoroughly after use to preserve the finish.",
    shippingInfo: "Ships in 2–4 business days.",
    colors: [sand, olive],
    material: "Galvanised steel",
    inStock: true,
    bestseller: true,
    tags: ["watering", "indoor"],
  },
  {
    id: "p14",
    slug: "copper-rain-chain",
    name: "Copper Rain Chain",
    category: "Garden Object",
    collection: "garden-decor",
    price: 2800,
    images: [img(IMAGES.categoryDecor, 1400), img(IMAGES.detailA, 1400)],
    description:
      "A handcrafted copper rain chain that channels rainfall from gutter to ground with a quiet, visible rhythm.",
    specifications: [
      { label: "Material", value: "Solid copper" },
      { label: "Length", value: "2.4 metres, extendable" },
    ],
    careInstructions: "Will develop a natural patina outdoors over time.",
    shippingInfo: "Ships in 3–5 business days.",
    material: "Solid copper",
    inStock: true,
    featured: true,
    tags: ["decor", "outdoor"],
  },
  {
    id: "p15",
    slug: "woven-plant-mister",
    name: "Woven Plant Mister",
    category: "Watering Accessory",
    collection: "garden-decor",
    price: 950,
    images: [img(IMAGES.detailC, 1400), img(IMAGES.categoryDecor, 1400)],
    description:
      "A fine-mist glass spray bottle wrapped in a hand-woven cane sleeve, built for daily misting of tropical plants.",
    specifications: [
      { label: "Material", value: "Glass, rattan sleeve" },
      { label: "Capacity", value: "300ml" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    colors: [sand, terracotta],
    inStock: true,
    tags: ["watering", "indoor"],
  },
  {
    id: "p16",
    slug: "ceramic-wind-chime",
    name: "Ceramic Wind Chime",
    category: "Garden Object",
    collection: "garden-decor",
    price: 1200,
    images: [img(IMAGES.detailA, 1400), img(IMAGES.categoryDecor, 1400)],
    description:
      "A set of hand-glazed ceramic chimes tuned to a soft, low register, finished with a natural jute hanger.",
    specifications: [
      { label: "Material", value: "Glazed ceramic, jute cord" },
      { label: "Length", value: "45cm" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    inStock: true,
    isNew: true,
    tags: ["decor", "outdoor"],
  },
  {
    id: "p17",
    slug: "brass-garden-trowel-set",
    name: "Brass Garden Trowel Set",
    category: "Gardening Accessory",
    collection: "garden-decor",
    price: 1750,
    images: [img(IMAGES.categoryDecor, 1400), img(IMAGES.detailB, 1400)],
    description:
      "A three-piece hand tool set in solid brass with ash wood handles, built to age into a natural patina.",
    specifications: [
      { label: "Contents", value: "Trowel, cultivator, transplanter" },
      { label: "Material", value: "Solid brass, ash wood" },
    ],
    careInstructions: "Rinse and dry after use. Patina will darken naturally with use.",
    shippingInfo: "Ships in 2–4 business days.",
    material: "Solid brass",
    inStock: true,
    tags: ["accessory", "tools"],
  },
  {
    id: "p18",
    slug: "terracotta-saucer-trio",
    name: "Terracotta Saucer Trio",
    category: "Gardening Accessory",
    collection: "garden-decor",
    price: 650,
    images: [img(IMAGES.detailC, 1400), img(IMAGES.categoryPlanters, 1400)],
    description:
      "A set of three unglazed terracotta saucers in graduated sizes, designed to protect surfaces from overwatering.",
    specifications: [
      { label: "Contents", value: "3 saucers: 12cm, 16cm, 20cm" },
      { label: "Material", value: "Unglazed terracotta" },
    ],
    shippingInfo: "Ships in 2–4 business days.",
    material: "Unglazed terracotta",
    inStock: true,
    tags: ["accessory", "planters"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collection: string) {
  return products.filter((p) => p.collection === collection);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, count);
}

export const featuredProducts = products.filter((p) => p.featured);
export const bestsellerProducts = products.filter((p) => p.bestseller);
