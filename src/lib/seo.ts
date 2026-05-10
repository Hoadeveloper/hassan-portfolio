import type { Metadata } from "next";

import type { ManagedContent } from "@/types/managed-content";

const defaultOgImage = "/images/og-image.png";

export function normalizeSiteUrl(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function absoluteUrl(siteUrl: string, pathname = "/") {
  const normalizedSiteUrl = normalizeSiteUrl(siteUrl);
  const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+/, "")}`;
  return `${normalizedSiteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function createPageMetadata(
  site: ManagedContent["site"],
  {
    title,
    description,
    pathname = "/",
    type = "website",
  }: {
    title: string;
    description: string;
    pathname?: string;
    type?: "website" | "article" | "profile";
  },
): Metadata {
  const siteUrl = normalizeSiteUrl(site.metadataBase);
  const canonical = absoluteUrl(siteUrl, pathname);

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: site.shortName,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: `${site.shortName} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function createPersonSchema(content: ManagedContent) {
  const siteUrl = normalizeSiteUrl(content.site.metadataBase);
  const socialLinks = [
    content.site.github,
    content.site.linkedin,
    content.site.telegram,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.site.name,
    alternateName: content.site.shortName,
    url: siteUrl,
    description: content.site.description,
    image: content.media.profileImage ? absoluteUrl(siteUrl, content.media.profileImage) : undefined,
    email: content.site.email || undefined,
    telephone: content.site.phone || undefined,
    sameAs: socialLinks.length ? socialLinks : undefined,
    jobTitle: "Full-stack developer",
    knowsAbout: [
      "Frontend development",
      "Backend development",
      "API development",
      "Workflow automation",
      "Telegram bot development",
      "Discord bot development",
    ],
    worksFor: {
      "@type": "Organization",
      name: content.site.shortName,
    },
  };
}

export function createWebsiteSchema(content: ManagedContent) {
  const siteUrl = normalizeSiteUrl(content.site.metadataBase);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: content.site.shortName,
    url: siteUrl,
    description: content.site.description,
    inLanguage: "en",
  };
}
