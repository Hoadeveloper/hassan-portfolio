"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/types/managed-content";

type NavbarClientProps = {
  shortName: string;
  navItems: NavigationItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function NavbarClient({
  shortName,
  navItems,
  ctaLabel,
  ctaHref,
}: NavbarClientProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/82 shadow-[0_10px_30px_rgba(9,38,53,0.35)] backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-cyan-100"
        >
          {shortName}
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <li key={`${item.label}-${item.href}`}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-sm font-medium transition ${
                      active ? "text-white" : "text-slate-200 hover:text-white"
                    }`}
                  >
                    <span
                      className={`absolute -bottom-2 left-0 h-px bg-cyan-300/80 transition-all duration-300 ${
                        active ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Button href={ctaHref} className="hidden md:inline-flex">
          {ctaLabel}
        </Button>
      </Container>
    </header>
  );
}
