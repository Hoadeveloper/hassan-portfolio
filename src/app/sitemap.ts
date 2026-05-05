import type { MetadataRoute } from "next";

import { getManagedContent } from "@/lib/managed-content";
import { absoluteUrl, normalizeSiteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content = await getManagedContent();
  const siteUrl = normalizeSiteUrl(content.site.metadataBase);
  const updatedAt = content.updatedAt ? new Date(content.updatedAt) : new Date();

  const routes: Array<{
    pathname: string;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
    priority: number;
    images?: string[];
  }> = [
    {
      pathname: "/",
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl(siteUrl, "/images/og-image.png")],
    },
    {
      pathname: "/portfolio",
      changeFrequency: "weekly",
      priority: 0.9,
      images: Object.values(content.media.projectImages)
        .filter(Boolean)
        .map((imagePath) => absoluteUrl(siteUrl, imagePath)),
    },
    {
      pathname: "/resume",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      pathname: "/contact",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      pathname: "/blog",
      changeFrequency: "weekly",
      priority: 0.7,
      images: Object.values(content.media.blogCoverImages)
        .filter(Boolean)
        .map((imagePath) => absoluteUrl(siteUrl, imagePath)),
    },
    {
      pathname: "/skills",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(siteUrl, route.pathname),
    lastModified: updatedAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images?.length ? route.images : undefined,
  }));
}
