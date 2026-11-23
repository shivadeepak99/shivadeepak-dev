import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const at = (p: string) => `${site.url}${p}`;
  return [
    { url: at("/") },
    { url: at("/work") },
    ...work.map((c) => ({ url: at(`/work/${c.slug}`) })),
    { url: at("/uses") },
  ];
}
