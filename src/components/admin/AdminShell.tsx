import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

const adminNav = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/site", label: "Site" },
  { href: "/admin/navigation", label: "Navigation" },
  { href: "/admin/home", label: "Homepage" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/resume", label: "Resume" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/media", label: "Media" },
] as const;

export function AdminShell({
  pathname,
  children,
  heading,
  subheading,
}: {
  pathname: string;
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_28%),radial-gradient(circle_at_90%_12%,rgba(92,131,116,0.08),transparent_18%)]" />
      <Container className="relative z-10 max-w-[1380px]">
        <div className="grid gap-5 lg:grid-cols-[248px_minmax(0,1fr)]">
          <aside className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.92))] p-5 shadow-[0_24px_60px_rgba(9,38,53,0.34)]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-300/88">
              Admin
            </p>
            <h1 className="mt-3 text-[1.45rem] font-semibold tracking-tight text-white">
              Portfolio control panel
            </h1>
            <p className="mt-3 text-[0.92rem] leading-7 text-slate-300/88">
              Manage the live content source for the homepage, inner pages, navigation, and media.
            </p>

            <nav className="mt-6 grid gap-2" aria-label="Admin navigation">
              {adminNav.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-[16px] border px-4 py-3 text-sm transition ${
                      active
                        ? "border-cyan-300/22 bg-cyan-300/[0.08] text-cyan-100"
                        : "border-white/8 bg-white/[0.02] text-slate-300 hover:border-cyan-300/14 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 grid gap-3">
              <Button href="/" variant="secondary" className="justify-center">
                View site
              </Button>
              <form action="/admin/logout" method="post">
                <button
                  type="submit"
                  className="w-full rounded-[16px] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/18 hover:text-white"
                >
                  Sign out
                </button>
              </form>
            </div>
          </aside>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] shadow-[0_28px_72px_rgba(9,38,53,0.36)]">
            <div className="border-b border-white/[0.06] px-6 py-5 sm:px-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-300/88">
                {heading}
              </p>
              <p className="mt-3 max-w-[64ch] text-[0.95rem] leading-7 text-slate-300/88">
                {subheading}
              </p>
            </div>
            <div className="px-6 py-6 sm:px-8 sm:py-8">{children}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
