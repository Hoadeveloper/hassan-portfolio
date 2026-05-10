import { ArrowRight, Bot, CalendarDays, Workflow } from "lucide-react";
import Image from "next/image";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { ProfileSidebarCard } from "@/components/profile/ProfileSidebarCard";
import { Button } from "@/components/ui/Button";
import type { ManagedContent } from "@/types/managed-content";

type BlogProps = {
  content: ManagedContent["blog"];
  profileImage?: string;
};

function FeaturedCover({ post }: { post: ManagedContent["blog"]["posts"][number] }) {
  return (
    <div className="relative min-h-[9.5rem] overflow-hidden rounded-[15px] border border-white/8 bg-[radial-gradient(circle_at_72%_18%,rgba(158,200,185,0.22),transparent_18%),linear-gradient(135deg,#092635_0%,#1b4242_48%,#1b4242_100%)] px-3.5 py-3.5">
      {post.coverImage ? (
        <Image src={post.coverImage} alt="" fill sizes="(max-width: 1280px) 100vw, 480px" className="object-cover" />
      ) : (
        <div className="absolute right-3.5 top-3.5 flex h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-white/10 bg-[linear-gradient(180deg,rgba(24,45,70,0.86),rgba(12,22,38,0.7))] shadow-[0_0_20px_rgba(158,200,185,0.12)]">
          <Workflow className="h-5.5 w-5.5 text-cyan-300/88" />
        </div>
      )}
      {!post.coverImage ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,53,0.04),rgba(9,38,53,0.72))]" />
          <div className="relative z-10 max-w-[62%]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/88">
              {post.eyebrow}
            </p>
            <h3 className="mt-2 text-[0.92rem] font-medium leading-[0.98] tracking-[-0.03em] text-white sm:text-[1.02rem]">
              {post.title}
            </h3>
            <p className="mt-2 text-[0.54rem] font-medium uppercase tracking-[0.16em] text-slate-200/76">
              Hassan Abdulrahman
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

function SecondaryCover({ post }: { post: ManagedContent["blog"]["posts"][number] }) {
  return (
    <div className="relative min-h-[8.75rem] overflow-hidden rounded-[15px] border border-white/8 bg-[radial-gradient(circle_at_78%_18%,rgba(158,200,185,0.18),transparent_18%),radial-gradient(circle_at_92%_20%,rgba(244,250,247,0.16),transparent_8%),linear-gradient(135deg,#1b4242_0%,#1b4242_48%,#1b4242_100%)] px-3.5 py-3.5">
      {post.coverImage ? (
        <Image src={post.coverImage} alt="" fill sizes="(max-width: 1280px) 100vw, 480px" className="object-cover" />
      ) : null}
      {!post.coverImage ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,53,0.06),rgba(9,38,53,0.74))]" />
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(158,200,185,0.52)_0.7px,transparent_0.7px)] [background-size:82px_82px]" />
        </>
      ) : null}
      {!post.coverImage ? (
        <div className="absolute right-3.5 top-3.5 flex h-[48px] w-[62px] items-center justify-center rounded-[13px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(27,66,66,0.84),rgba(9,38,53,0.7))] shadow-[0_0_22px_rgba(158,200,185,0.15)]">
          <Bot className="h-5.5 w-5.5 text-cyan-300/88" />
        </div>
      ) : null}
      {!post.coverImage ? (
        <>
          <div className="pointer-events-none absolute right-[10%] top-[34%] h-px w-[22%] bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.72),transparent)]" />
          <div className="relative z-10 max-w-[68%]">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/88">
              {post.eyebrow}
            </p>
            <h3 className="mt-2 text-[0.94rem] font-medium leading-[0.98] tracking-[-0.03em] text-white sm:text-[1.04rem]">
              {post.coverTitle ?? post.title}
            </h3>
            <p className="mt-2 text-[0.54rem] font-medium uppercase tracking-[0.16em] text-slate-200/76">
              Hassan Abdulrahman
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}

function PrimaryArticleCard({ post }: { post: ManagedContent["blog"]["posts"][number] }) {
  return (
    <article className="flex h-full flex-col space-y-2 rounded-[14px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(27,66,66,0.92),rgba(9,38,53,0.88))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_38px_rgba(9,38,53,0.2)]">
      <FeaturedCover post={post} />

      <div className="flex flex-1 flex-col px-0.5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/88">
          {post.eyebrow}
        </p>
        <h3 className="mt-2 max-w-none text-[0.78rem] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-[0.86rem]">
          {post.title}
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[0.62rem] text-slate-400">
          <span>{post.author}</span>
          <span>&middot;</span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
        </div>
        <div className="mt-auto pt-2">
          <Button href={post.ctaHref} variant="secondary" className="gap-1.5 px-2.5 py-1.5 text-[0.62rem]">
            {post.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

function SecondaryArticleCard({ post }: { post: ManagedContent["blog"]["posts"][number] }) {
  return (
    <article className="space-y-2 rounded-[14px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.92),rgba(9,38,53,0.88))] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_38px_rgba(9,38,53,0.2)]">
      <SecondaryCover post={post} />

      <div className="px-0.5">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/88">
          {post.eyebrow}
        </p>
        <h3 className="mt-1.5 text-[0.82rem] font-medium leading-[1.02] tracking-[-0.03em] text-white">
          {post.title}
        </h3>
        <div className="mt-1.5 h-px w-full bg-white/[0.08]" />
        <p className="mt-1.5 text-[0.66rem] text-slate-300/92">{post.author}</p>
        <div className="mt-2">
          <Button href={post.ctaHref} variant="secondary" className="px-2.5 py-1.5 text-[0.62rem]">
            {post.ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Blog({ content, profileImage }: BlogProps) {
  const [primaryPost, ...secondaryPosts] = content.posts;

  return (
    <section className="relative overflow-hidden pb-9 pt-6 sm:pb-10 sm:pt-7 lg:pb-12 lg:pt-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(92,131,116,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(rgba(158,200,185,0.48)_0.7px,transparent_0.7px)] [background-size:110px_110px]" />

      <Container className="relative z-10 max-w-[1120px]">
        <div className="grid gap-5 lg:grid-cols-[188px_minmax(0,0.88fr)] xl:grid-cols-[200px_minmax(0,0.88fr)]">
          <FadeIn className="lg:self-start lg:pt-1">
            <ProfileSidebarCard
              name={content.sidebarName}
              role={content.sidebarRole}
              availabilityText={content.sidebarStatusText}
              profileImage={profileImage}
            />
          </FadeIn>

          <FadeIn>
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] shadow-[0_24px_60px_rgba(9,38,53,0.3)]">
              <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(rgba(158,200,185,0.45)_0.7px,transparent_0.7px)] [background-size:104px_104px]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_16%,rgba(255,255,255,0.1),transparent_18%),radial-gradient(circle_at_78%_12%,rgba(158,200,185,0.08),transparent_20%)]" />

              <div className="relative px-6 pb-6 pt-6 sm:px-7 sm:pb-7 sm:pt-7 lg:px-7 lg:pb-8 lg:pt-7">
                <div className="space-y-5">
                  <header className="space-y-2.5">
                    <h2 className="text-[2.1rem] font-semibold tracking-tight text-white sm:text-[2.45rem]">
                      {content.pageTitle}
                    </h2>
                    <div className="h-1 w-10 rounded-full bg-cyan-300" />
                    <div className="h-px w-full bg-white/[0.06]" />
                  </header>

                  <div className="grid gap-3.5 md:grid-cols-2 xl:items-start">
                    {primaryPost ? <PrimaryArticleCard post={primaryPost} /> : null}
                    {secondaryPosts.map((post) => (
                      <SecondaryArticleCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
