import { img, IMAGES } from "@/lib/images";
import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "choosing-the-right-planter-for-your-space",
    title: "Choosing the Right Planter for Your Space",
    category: "Guides",
    excerpt:
      "Size, material, and drainage matter more than style when it comes to picking a planter your plant will actually thrive in.",
    image: img(IMAGES.categoryPlanters, 1200),
    readingTime: "5 min read",
    publishedAt: "2026-02-18",
    content: [
      "The right planter starts with the plant, not the other way around. Before anything else, consider the root system you're housing — a plant that likes to dry out between waterings wants a porous material like terracotta, while moisture-loving plants do better in sealed ceramic or coated metal.",
      "Size is the next most common mistake. A planter that's too large holds excess moisture far from the roots, inviting rot; one that's too small restricts growth and dries out quickly. As a rule of thumb, look for a planter roughly 2–5cm wider in diameter than the plant's current nursery pot.",
      "Finally, don't overlook drainage. A planter without a drainage hole can still work indoors if you're comfortable monitoring watering carefully, but a pre-drilled base with a saucer gives far more room for error — especially for beginners.",
    ],
  },
  {
    slug: "understanding-cocopeat-perlite-and-vermiculite",
    title: "Understanding Cocopeat, Perlite and Vermiculite",
    category: "Plant Care",
    excerpt:
      "Three growing media, three very different jobs. Here's how to blend them for healthier roots and better drainage.",
    image: img(IMAGES.categorySoil, 1200),
    readingTime: "6 min read",
    publishedAt: "2026-03-02",
    content: [
      "Cocopeat, perlite, and vermiculite are often sold side by side, but each solves a different problem. Cocopeat is a coir-based growing medium that holds moisture well and gives roots something light and airy to grow through — it's a strong base for most potting mixes.",
      "Perlite is the opposite: a lightweight, porous volcanic glass that creates air pockets in soil, improving drainage and preventing compaction. It doesn't hold water or nutrients itself, which is exactly the point — it keeps everything around it from staying too wet.",
      "Vermiculite sits in between. It holds more moisture and nutrients than perlite while still improving aeration, which makes it especially useful for seed starting and for plants that prefer consistently moist soil.",
      "A simple starting blend for most houseplants: 2 parts cocopeat, 1 part perlite, and a small handful of vermiculite — adjusted based on how thirsty the specific plant is.",
    ],
  },
  {
    slug: "small-balcony-big-possibilities",
    title: "Small Balcony, Big Possibilities",
    category: "Inspiration",
    excerpt:
      "A handful of rail planters, the right verticals, and a little planning can turn even a narrow balcony into a green retreat.",
    image: img(IMAGES.categoryDecor, 1200),
    readingTime: "4 min read",
    publishedAt: "2026-03-20",
    content: [
      "Balconies are often the most underused space in an apartment, mostly because it's easy to assume there isn't room for much. Rail-mounted planters are the single biggest unlock here — they add a full growing bed without taking up a centimetre of floor space.",
      "Think in layers. Use the railing for trailing plants and herbs, place a tall floor planter in a corner for height, and hang a rope planter from an overhead beam or bracket if you have one. The goal is to use every plane of the space, not just the floor.",
      "Lastly, consider sun exposure before anything else. A balcony that gets a few hours of direct light can support flowering plants and small vegetables; a shadier one is better suited to ferns, pothos, and other low-light foliage.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
