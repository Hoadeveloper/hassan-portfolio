import type { MetadataRoute } from "next";

import { getManagedContent } from "@/lib/managed-content";
import { absoluteUrl, normalizeSiteUrl } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const content = await getManagedContent();
  const siteUrl = normalizeSiteUrl(content.site.metadataBase);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin"],
      },
    ],
    sitemap: absoluteUrl(siteUrl, "/sitemap.xml"),
    host: siteUrl,
  };
}
