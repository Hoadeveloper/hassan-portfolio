import type { MetadataRoute } from "next";

import { getManagedContent } from "@/lib/managed-content";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const content = await getManagedContent();

  return {
    name: content.site.name,
    short_name: content.site.shortName,
    description: content.site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#092635",
    theme_color: "#092635",
    icons: [
      {
        src: "/images/hoadev-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
