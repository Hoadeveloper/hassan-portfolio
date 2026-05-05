import type { Metadata } from "next";

import { Blog } from "@/features/blog/BlogSection";
import { getManagedContent } from "@/lib/managed-content";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();

  return createPageMetadata(content.site, {
    title: "Blog",
    description:
      "Notes and articles from Hassan Olanrewaju Abdulrahman on backend engineering, APIs, automation, bots, and practical product development.",
    pathname: "/blog",
  });
}

export default async function BlogPage() {
  const content = await getManagedContent();

  return (
    <Blog
      content={content.blog}
      quickContacts={content.site.quickContacts}
      profileImage={content.media.profileImage}
    />
  );
}
