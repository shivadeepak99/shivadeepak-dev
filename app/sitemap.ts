import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { notes } from "@/content/notes";

export default function sitemap(): MetadataRoute.Sitemap {
  const at = (p: string) => `${site.url}${p}`;
  return [
    { url: at("/") },
    { url: at("/work") },
    ...work.map((c) => ({ url: at(`/work/${c.slug}`) })),
    { url: at("/notes") },
    ...notes.map((n) => ({ url: at(`/notes/${n.slug}`), lastModified: n.date })),
    { url: at("/uses") },
  ];
}
