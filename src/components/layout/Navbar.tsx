"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { site } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";
import { MobileLogo } from "@/mobile/ui/MobileLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstName, ...rest] = site.shortName.split(" ");
  const secondLine = rest.slice(0, 2).join(" ") || "Portfolio";

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-[#07111f]/86 backdrop-blur-xl"
          : "border-white/8 bg-[#06111d]/88 backdrop-blur-xl lg:border-transparent lg:bg-transparent",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-3 px-4 md:px-8 lg:h-16">
        <Link href="/" className="min-w-0 flex-1" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-2.5 lg:gap-3">
            <MobileLogo />

            <div className="min-w-0 lg:hidden">
              <p className="truncate text-[0.68rem] font-semibold uppercase leading-none tracking-[0.26em] text-white">
                {firstName}
              </p>
              <p className="mt-1 truncate text-[0.68rem] font-medium uppercase leading-none tracking-[0.26em] text-slate-100/88">
                {secondLine}
              </p>
            </div>

            <div className="hidden lg:block">
              <p className="truncate text-[0.92rem] font-semibold uppercase leading-none tracking-[0.34em] text-white">
                HASSAN O.A
              </p>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {site.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[0.78rem] border border-white/12 bg-white/[0.03] text-cyan-100 transition hover:bg-white/[0.06] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-950/55 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onPointerDown={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="absolute right-3 top-3 w-[8.75rem] rounded-[0.85rem] border border-white/10 bg-[#07111f]/96 p-2 shadow-[0_18px_44px_rgba(4,14,24,0.32)]"
              onPointerDown={(event) => event.stopPropagation()}
            >
              <nav className="grid gap-1.5">
                {site.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[0.65rem] border border-white/8 bg-white/[0.025] px-2.5 py-1.5 text-[0.68rem] text-slate-200 transition hover:bg-white/[0.05]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
