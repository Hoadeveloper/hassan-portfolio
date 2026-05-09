// src/mobile/blog/BlogMobilePage.tsx
import { CalendarDays, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { ManagedContent } from "@/types/managed-content";
import { MobilePageBackground } from "@/mobile/layout/MobilePageBackground";
import { MobileGlassCard } from "@/mobile/ui/MobileGlassCard";

type BlogMobilePageProps = {
  content: ManagedContent;
};

export function BlogMobilePage({
  content,
}: BlogMobilePageProps) {
  const posts = content.blog.posts;
  const [featured, ...rest] = posts;

  return (
    <MobilePageBackground>
      <div className="mx-auto flex w-full max-w-[32rem] flex-col gap-4 px-4 pb-5 pt-2 min-[380px]:px-5">
        <p className="px-1 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
          Blog
        </p>

        {featured ? (
          <MobileGlassCard className="px-3.5 py-3.5">
            <div className="grid gap-3.5 md:grid-cols-[15rem_minmax(0,1fr)]">
              <div className="relative aspect-[2.15] overflow-hidden rounded-[0.95rem] border border-cyan-200/10 bg-slate-950/20">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="240px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                  {featured.eyebrow}
                </p>
                <h2 className="mt-1.5 truncate whitespace-nowrap text-[0.78rem] font-semibold leading-snug tracking-[-0.01em] text-white">
                  {featured.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-[0.76rem] text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <UserRound className="h-3.5 w-3.5" />
                    {featured.author}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {featured.date}
                  </span>
                </div>

              </div>
            </div>
          </MobileGlassCard>
        ) : null}

        <div className="grid gap-3">
          {rest.map((post) => (
            <MobileGlassCard key={post.slug} className="px-3.5 py-3.5">
              <div className="grid gap-3.5 md:grid-cols-[14rem_minmax(0,1fr)]">
                <div className="relative aspect-[2.2] overflow-hidden rounded-[0.95rem] border border-cyan-200/10 bg-slate-950/20">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="224px"
                    className="object-cover object-center"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-cyan-200/90">
                    {post.eyebrow}
                  </p>
                  <h3 className="mt-1.5 truncate whitespace-nowrap text-[0.78rem] font-semibold leading-snug tracking-[-0.01em] text-white">
                    {post.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-[0.76rem] text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <UserRound className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </MobileGlassCard>
          ))}
        </div>

        <MobileGlassCard className="px-3.5 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-[1.15rem] font-semibold text-white">
                More coming soon
              </h3>
              <p className="mt-1.5 text-[0.82rem] leading-5 text-slate-300/84">
                Subscribe to stay updated with new posts and development
                insights.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[2.75rem] shrink-0 items-center rounded-[0.8rem] border border-cyan-200/20 bg-cyan-300/[0.1] px-3.5 text-[0.82rem] font-medium text-cyan-100 transition hover:bg-cyan-300/[0.14]"
            >
              Subscribe
            </Link>
          </div>
        </MobileGlassCard>
      </div>
    </MobilePageBackground>
  );
}
