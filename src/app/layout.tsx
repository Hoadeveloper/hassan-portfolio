import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getManagedContent } from "@/lib/managed-content";
import { createPageMetadata, createPersonSchema, createWebsiteSchema } from "@/lib/seo";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();
  const baseTitle = `${content.site.name} | Full-Stack Web Developer`;

  return {
    ...createPageMetadata(content.site, {
      title: baseTitle,
      description: content.site.description,
      pathname: "/",
      type: "profile",
    }),
    title: {
      default: baseTitle,
      template: `%s | ${content.site.shortName}`,
    },
    applicationName: content.site.shortName,
    category: "technology",
    authors: [{ name: content.site.name, url: content.site.metadataBase }],
    creator: content.site.name,
    publisher: content.site.shortName,
    manifest: "/manifest.webmanifest",
    keywords: [
      "Hassan Olanrewaju Abdulrahman",
      "full-stack web developer",
      "backend developer",
      "Next.js portfolio",
      "API developer",
      "workflow automation",
      "Telegram bot developer",
      "Discord bot developer",
    ],
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/apple-icon.png",
    },
  };
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const content = await getManagedContent();
  const personSchema = createPersonSchema(content);
  const websiteSchema = createWebsiteSchema(content);

  return (
    <html lang="en">
      <body className="texture min-h-screen bg-slate-950 text-slate-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main id="content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
