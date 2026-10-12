import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { collections } from "@/data/collections";
import { articles } from "@/data/articles";

const siteUrl = "https://verdantliving.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/commercial-spaces",
    "/journal",
    "/contact",
    "/faq",
    "/cart",
    "/privacy-policy",
    "/terms",
    "/shipping-returns",
  ].map((path) => ({ url: `${siteUrl}${path}` }));

  const collectionRoutes = collections.map((c) => ({
    url: `${siteUrl}/collections/${c.slug}`,
  }));
  const productRoutes = products.map((p) => ({
    url: `${siteUrl}/products/${p.slug}`,
  }));
  const articleRoutes = articles.map((a) => ({
    url: `${siteUrl}/journal/${a.slug}`,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes, ...articleRoutes];
}
