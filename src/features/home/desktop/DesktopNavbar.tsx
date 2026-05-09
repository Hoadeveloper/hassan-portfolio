import Link from "next/link";
import type { ManagedContent } from "@/types/managed-content";

type DesktopNavbarProps = {
  site: ManagedContent["site"];
  navItems: ManagedContent["navigation"]["items"];
};

export function DesktopNavbar({ site, navItems }: DesktopNavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 shadow-[0_10px_30px_rgba(9,38,53,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-10">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-cyan-100"
        >
          {site.shortName}
        </Link>

        <nav aria-label="Desktop homepage navigation">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-200 transition hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={site.ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          {site.ctaLabel}
        </Link>
      </div>
    </header>
  );
}
