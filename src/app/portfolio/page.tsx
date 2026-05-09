import type { Metadata } from "next";

import { Portfolio } from "@/features/portfolio/PortfolioSection";
import { getManagedContent } from "@/lib/managed-content";
import { PortfolioMobilePage } from "@/mobile/portfolio/PortfolioMobilePage";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getManagedContent();

  return createPageMetadata(content.site, {
    title: "Projects",
    description:
      "Projects page for Hassan Olanrewaju Abdulrahman featuring web development, backend systems, APIs, automation products, and bot-driven tools.",
    pathname: "/portfolio",
  });
}

export default async function PortfolioPage() {
  const content = await getManagedContent();

  return (
    <>
      <div className="block lg:hidden">
        <PortfolioMobilePage content={content} />
      </div>
      <div className="hidden lg:block">
        <Portfolio
          content={content.projects}
          projectImages={content.media.projectImages}
          quickContacts={content.site.quickContacts}
          profileImage={content.media.profileImage}
        />
      </div>
    </>
  );
}
