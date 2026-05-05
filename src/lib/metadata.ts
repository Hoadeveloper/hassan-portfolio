import type { Metadata } from "next";

import { site } from "@/data/site";

// Legacy fallback metadata for modules that may still import this file.
export const metadata: Metadata = {
  title: `${site.name} | Full-Stack Web Developer`,
  description: site.description,
};
