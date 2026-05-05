import type { Metadata } from "next";

import { Resume } from "@/features/resume/ResumeSection";
import { getManagedContent } from "@/lib/managed-content";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();

  return createPageMetadata(content.site, {
    title: "Resume",
    description:
      "Resume page for Hassan Olanrewaju Abdulrahman, a growing Python and backend developer focused on APIs, automation, bots, and practical software systems.",
    pathname: "/resume",
  });
}

export default async function ResumePage() {
  const content = await getManagedContent();
  return <Resume content={content.resume} profileImage={content.media.profileImage} />;
}
