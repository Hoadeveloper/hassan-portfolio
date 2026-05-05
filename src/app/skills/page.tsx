import type { Metadata } from "next";

import { Skills } from "@/features/skills/SkillsSection";
import { getManagedContent } from "@/lib/managed-content";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();

  return createPageMetadata(content.site, {
    title: "Skills",
    description:
      "Explore the skills of Hassan Olanrewaju Abdulrahman across Python, backend development, APIs, bots, databases, and practical software engineering.",
    pathname: "/skills",
  });
}

export default function SkillsPage() {
  return <Skills mode="page" />;
}
