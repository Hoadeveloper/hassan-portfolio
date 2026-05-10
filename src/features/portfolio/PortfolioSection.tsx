"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { ProfileSidebarCard } from "@/components/profile/ProfileSidebarCard";
import { Button } from "@/components/ui/Button";
import type { ManagedContent } from "@/types/managed-content";

const iconMap = {
  database: Database,
  sparkles: Sparkles,
  globe: Globe,
} as const;

function toProjectImageKey(title: string) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function ProjectVisual({
  title,
  icon,
  accent,
  imageSrc,
}: {
  title: string;
  icon: ManagedContent["projects"]["cards"][number]["icon"];
  accent: "backend" | "api" | "website";
  imageSrc?: string;
}) {
  const Icon = iconMap[icon];
  const background =
    accent === "backend"
      ? "bg-[radial-gradient(circle_at_78%_14%,rgba(158,200,185,0.28),transparent_18%),radial-gradient(circle_at_14%_18%,rgba(92,131,116,0.18),transparent_18%),linear-gradient(135deg,#092635_0%,#1b4242_46%,#1b4242_100%)]"
      : accent === "api"
        ? "bg-[radial-gradient(circle_at_18%_18%,rgba(92,131,116,0.24),transparent_22%),linear-gradient(135deg,#092635_0%,#5c8374_48%,#5c8374_100%)]"
        : accent === "website"
          ? "bg-[radial-gradient(circle_at_76%_16%,rgba(158,200,185,0.18),transparent_18%),linear-gradient(135deg,#092635_0%,#5c8374_45%,#5c8374_100%)]"
          : "bg-[radial-gradient(circle_at_72%_12%,rgba(158,200,185,0.22),transparent_18%),linear-gradient(135deg,#092635_0%,#5c8374_52%,#5c8374_100%)]";

  return (
    <div className={`relative h-[150px] overflow-hidden rounded-[20px] border border-white/8 sm:h-[160px] ${background}`}>
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={`${title} project thumbnail`}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,53,0.05),rgba(9,38,53,0.18)_44%,rgba(9,38,53,0.42))]" />
        </>
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(9,38,53,0.14))]" />
      <div className="absolute inset-x-[8%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.58),transparent)]" />
      {!imageSrc ? (
        <>
          <div className="absolute right-5 top-5 flex h-[76px] w-[76px] items-center justify-center rounded-[20px] border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
            <Icon className="h-8 w-8 text-cyan-300/90" />
          </div>
        </>
      ) : null}
    </div>
  );
}

function ProjectCard({
  item,
  imageSrc,
}: {
  item: ManagedContent["projects"]["cards"][number];
  imageSrc?: string;
}) {
  return (
    <article className="flex h-full min-h-[14.5rem] flex-col rounded-[22px] border border-white/7 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.88))] p-3 shadow-[0_16px_34px_rgba(9,38,53,0.14)]">
      <ProjectVisual
        title={item.title}
        icon={item.icon}
        accent={item.accent}
        imageSrc={imageSrc}
      />

      <div className="mt-2.5 flex flex-col px-1">
        <p className="text-[0.58rem] uppercase tracking-[0.2em] text-slate-400">
          {item.category}
        </p>
        <h3 className="mt-1.5 text-[0.95rem] font-semibold leading-[1.02] tracking-tight text-white">
          {item.title}
        </h3>
        <p className="mt-2 max-w-[34ch] text-[0.76rem] leading-5 text-slate-300">
          {item.description}
        </p>
        <div className="pt-2.5">
          <Button href={item.href} variant="secondary" className="px-3.5 py-2 text-[0.7rem]">
            {item.cta}
          </Button>
        </div>
      </div>
    </article>
  );
}

type PortfolioProps = {
  content: ManagedContent["projects"];
  projectImages: ManagedContent["media"]["projectImages"];
  profileImage?: string;
};

export function Portfolio({ content, projectImages, profileImage }: PortfolioProps) {
  const featuredProjectImage = projectImages[toProjectImageKey(content.featuredProject.title)];

  return (
    <section className="relative overflow-hidden pb-9 pt-3 sm:pb-10 sm:pt-5 lg:pb-12 lg:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_32%),radial-gradient(circle_at_88%_14%,rgba(92,131,116,0.1),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />

      <Container className="relative z-10 max-w-[1120px]">
        <div className="grid items-start gap-6 xl:grid-cols-[clamp(11.25rem,15vw,12.5rem)_minmax(0,0.88fr)] xl:gap-7">
          <FadeIn>
            <ProfileSidebarCard
              name={content.sidebarName}
              role={content.sidebarRole}
              availabilityText={content.sidebarStatusText}
              profileImage={profileImage}
            />
          </FadeIn>

          <FadeIn>
            <div className="min-h-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] shadow-[0_24px_60px_rgba(9,38,53,0.3)]">
              <div className="px-6 pb-6 pt-7 sm:px-7 sm:pb-7 sm:pt-8 lg:px-8 lg:pb-8 lg:pt-8">
                <div className="space-y-5 lg:grid lg:min-h-[31rem] lg:grid-rows-[auto_auto_minmax(15rem,0.8fr)_minmax(18rem,1fr)] lg:gap-4 lg:space-y-0">
                  <header className="space-y-3">
                    <h2 className="text-[2rem] font-semibold tracking-tight text-white sm:text-[2.25rem]">
                      {content.pageTitle}
                    </h2>
                    <div className="h-1 w-10 rounded-full bg-cyan-300" />
                    {content.intro ? (
                      <p className="max-w-[52ch] text-[0.82rem] leading-6 text-slate-300/88">
                        {content.intro}
                      </p>
                    ) : null}
                  </header>

                  <div className="flex flex-wrap gap-2.5">
                    {content.filters.map((filter, index) => (
                      <button
                        key={filter}
                        type="button"
                        className={`rounded-full border px-3.5 py-1.5 text-[0.68rem] font-medium transition ${
                          index === 0
                            ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                            : "border-white/10 bg-[#1b4242] text-slate-300 hover:border-cyan-300/18 hover:text-white"
                        }`}
                        aria-pressed={index === 0}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  <article className="overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.92))] p-4 shadow-[0_16px_36px_rgba(9,38,53,0.18)]">
                    <div className="grid gap-4 lg:h-full lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)] lg:items-stretch">
                      <div className="flex h-full flex-col justify-between rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_78%_14%,rgba(158,200,185,0.26),transparent_18%),radial-gradient(circle_at_14%_18%,rgba(92,131,116,0.18),transparent_18%),linear-gradient(135deg,#092635_0%,#1b4242_46%,#1b4242_100%)] p-5 sm:p-5">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cyan-300/90">
                          {content.featuredProject.category}
                        </p>
                        <h3 className="mt-3 text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.75rem]">
                          {content.featuredProject.title}
                        </h3>
                        <p className="mt-2.5 max-w-[40ch] text-[0.78rem] leading-5 text-slate-300">
                          {content.featuredProject.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2.5 pt-4">
                          <Button href={content.featuredProject.primaryButton.href} className="px-3.5 py-2 text-[0.7rem]">
                            {content.featuredProject.primaryButton.label}
                          </Button>
                          <Button href={content.featuredProject.secondaryButton.href} variant="secondary" className="px-3.5 py-2 text-[0.7rem]">
                            {content.featuredProject.secondaryButton.label}
                          </Button>
                        </div>
                      </div>

                      <div className="relative h-full overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.86),rgba(9,38,53,0.92))]">
                        {featuredProjectImage ? (
                          <>
                            <Image
                              src={featuredProjectImage}
                              alt={`${content.featuredProject.title} featured project thumbnail`}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,24,0.04),rgba(4,10,24,0.14)_36%,rgba(4,10,24,0.34))]" />
                          </>
                        ) : null}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-35" />
                        <div className="absolute right-[10%] top-[12%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_72%)] blur-3xl" />
                        <div className="relative flex h-full min-h-[210px] items-end p-5">
                          {!featuredProjectImage ? (
                            <div className="w-full rounded-[18px] border border-white/8 bg-white/[0.03] p-4 backdrop-blur-sm">
                              <div className="flex items-center justify-between gap-4">
                                <div>
                                  <p className="text-[0.64rem] uppercase tracking-[0.22em] text-cyan-300/88">
                                    {content.featuredProject.visualEyebrow}
                                  </p>
                                  <p className="mt-2 text-[0.98rem] font-medium text-white">
                                    {content.featuredProject.visualTitle}
                                  </p>
                                </div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] text-cyan-300">
                                  <Database className="h-6 w-6" />
                                </div>
                              </div>
                              <div className="mt-4 flex items-center gap-2 text-[0.68rem] text-slate-300">
                                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                                {content.featuredProject.visualSummary}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>

                  <div className="grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
                    {content.cards.map((item) => (
                      <ProjectCard
                        key={`${item.category}-${item.title}`}
                        item={item}
                        imageSrc={projectImages[toProjectImageKey(item.title)]}
                      />
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
