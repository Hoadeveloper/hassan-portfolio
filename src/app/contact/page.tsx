import type { Metadata } from "next";

import { Contact } from "@/features/contact/ContactSection";
import { getManagedContent } from "@/lib/managed-content";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();

  return createPageMetadata(content.site, {
    title: "Contact",
    description:
      "Get in touch with Hassan Olanrewaju Abdulrahman for backend development, APIs, bot development, workflow automation, and practical software work.",
    pathname: "/contact",
  });
}

export default async function ContactPage() {
  const content = await getManagedContent();
  return <Contact mode="page" managedSite={content.site} profileImage={content.media.profileImage} />;
}
