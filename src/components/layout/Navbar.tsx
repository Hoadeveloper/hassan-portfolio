import { getManagedContent } from "@/lib/managed-content";

import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
  const content = await getManagedContent();

  return (
    <NavbarClient
      shortName={content.site.shortName}
      navItems={content.navigation.items}
      ctaLabel={content.site.ctaLabel}
      ctaHref={content.site.ctaHref}
    />
  );
}
