"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MobileLogo } from "@/mobile/ui/MobileLogo";

type MobileNavbarProps = {
  siteName: string;
  navItems: { label: string; href: string }[];
};

export function MobileNavbar({
  siteName,
  navItems,
}: MobileNavbarProps) {
  const [open, setOpen] = useState(false);
  const [firstName, ...rest] = siteName.split(" ");
  const secondLine = rest.slice(0, 2).join(" ") || "Portfolio";

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#06111d]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-[32rem] items-center justify-between px-4 min-[380px]:px-5">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <MobileLogo />
            <div className="min-w-0">
              <p className="truncate text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-white">
                {firstName}
              </p>
              <p className="mt-0.5 truncate text-[0.68rem] font-medium uppercase tracking-[0.26em] text-slate-100/88">
                {secondLine}
              </p>
            </div>
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[0.78rem] border border-white/12 bg-white/[0.03] text-cyan-100 transition hover:bg-white/[0.06]"
          >
            {open ? (
              <X className="h-5.5 w-5.5" />
            ) : (
              <Menu className="h-5.5 w-5.5" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-slate-950/55 backdrop-blur-sm"
          onPointerDown={() => setOpen(false)}
        >
          <div
            className="absolute right-3 top-3 w-[8.75rem] rounded-[0.85rem] border border-white/10 bg-[#07111f]/96 p-2 shadow-[0_18px_44px_rgba(4,14,24,0.32)]"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <nav className="grid gap-1.5">
              {navItems.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[0.65rem] border border-white/8 bg-white/[0.025] px-2.5 py-1.5 text-[0.68rem] text-slate-200 transition hover:bg-white/[0.05]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
