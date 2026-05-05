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
import type { ManagedContent, QuickContact } from "@/types/managed-content";

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
  category,
  icon,
  accent,
  imageSrc,
}: {
  title: string;
  category: string;
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
    <div className={`relative h-[210px] overflow-hidden rounded-[26px] border border-white/8 sm:h-[220px] ${background}`}>
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
          <div className="absolute right-7 top-7 flex h-[102px] w-[102px] items-center justify-center rounded-[26px] border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
            <Icon className="h-10 w-10 text-cyan-300/90" />
          </div>
          <div className="absolute left-8 top-10 max-w-[62%]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              {category}
            </p>
            <h3 className="mt-4 text-[1.82rem] font-semibold leading-[0.96] tracking-tight text-white">
              {title}
            </h3>
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
    <article className="flex h-full min-h-[18.75rem] flex-col rounded-[28px] border border-white/7 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.88))] p-4 shadow-[0_18px_42px_rgba(9,38,53,0.16)]">
      <ProjectVisual
        title={item.title}
        category={item.category}
        icon={item.icon}
        accent={item.accent}
        imageSrc={imageSrc}
      />

      <div className="mt-3 flex flex-col px-1">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-400">
          {item.category}
        </p>
        <h3 className="mt-2 text-[1.08rem] font-semibold leading-[1.02] tracking-tight text-white">
          {item.title}
        </h3>
        <p className="mt-3 max-w-[34ch] text-[0.86rem] leading-6 text-slate-300">
          {item.description}
        </p>
        <div className="pt-3">
          <Button href={item.href} variant="secondary" className="px-4 py-2.5 text-[0.76rem]">
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
  quickContacts: QuickContact[];
  profileImage?: string;
};

export function Portfolio({ content, projectImages, quickContacts, profileImage }: PortfolioProps) {
  const featuredProjectImage = projectImages[toProjectImageKey(content.featuredProject.title)];

  return (
    <section className="relative overflow-hidden pb-12 pt-4 sm:pb-14 sm:pt-6 lg:pb-16 lg:pt-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_32%),radial-gradient(circle_at_88%_14%,rgba(92,131,116,0.1),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />

      <Container className="relative z-10 max-w-[1220px]">
        <div className="grid items-start gap-6 xl:grid-cols-[clamp(13.75rem,19vw,15.5rem)_minmax(0,1fr)] xl:gap-7">
          <FadeIn>
            <ProfileSidebarCard
              name={content.sidebarName}
              role={content.sidebarRole}
              availabilityText={content.sidebarStatusText}
              quickContacts={quickContacts}
              profileImage={profileImage}
            />
          </FadeIn>

          <FadeIn>
            <div className="min-h-[720px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] shadow-[0_28px_72px_rgba(9,38,53,0.36)]">
              <div className="px-7 pb-8 pt-9 sm:px-8 sm:pb-9 sm:pt-10 lg:px-10 lg:pb-11 lg:pt-11">
                <div className="space-y-7 lg:grid lg:min-h-[40rem] lg:grid-rows-[auto_auto_minmax(21rem,0.96fr)_minmax(25.5rem,1fr)] lg:gap-6 lg:space-y-0">
                  <header className="space-y-4">
                    <h2 className="text-[2.35rem] font-semibold tracking-tight text-white sm:text-[2.7rem]">
                      {content.pageTitle}
                    </h2>
                    <div className="h-1.5 w-11 rounded-full bg-cyan-300" />
                    {content.intro ? (
                      <p className="max-w-[52ch] text-[0.94rem] leading-7 text-slate-300/88">
                        {content.intro}
                      </p>
                    ) : null}
                  </header>

                  <div className="flex flex-wrap gap-3">
                    {content.filters.map((filter, index) => (
                      <button
                        key={filter}
                        type="button"
                        className={`rounded-full border px-4 py-2 text-[0.74rem] font-medium transition ${
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

                  <article className="overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.92))] p-5 shadow-[0_18px_44px_rgba(9,38,53,0.22)]">
                    <div className="grid gap-5 lg:h-full lg:grid-cols-[minmax(0,1.08fr)_minmax(17.5rem,0.92fr)] lg:items-stretch">
                      <div className="flex h-full flex-col justify-between rounded-[26px] border border-white/8 bg-[radial-gradient(circle_at_78%_14%,rgba(158,200,185,0.26),transparent_18%),radial-gradient(circle_at_14%_18%,rgba(92,131,116,0.18),transparent_18%),linear-gradient(135deg,#092635_0%,#1b4242_46%,#1b4242_100%)] p-6 sm:p-7">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                          {content.featuredProject.category}
                        </p>
                        <h3 className="mt-5 text-[1.86rem] font-semibold tracking-tight text-white sm:text-[2.2rem]">
                          {content.featuredProject.title}
                        </h3>
                        <p className="mt-4 max-w-[40ch] text-[0.9rem] leading-6 text-slate-300">
                          {content.featuredProject.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-3 pt-6">
                          <Button href={content.featuredProject.primaryButton.href} className="px-4 py-2.5 text-[0.76rem]">
                            {content.featuredProject.primaryButton.label}
                          </Button>
                          <Button href={content.featuredProject.secondaryButton.href} variant="secondary" className="px-4 py-2.5 text-[0.76rem]">
                            {content.featuredProject.secondaryButton.label}
                          </Button>
                        </div>
                      </div>

                      <div className="relative h-full overflow-hidden rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.86),rgba(9,38,53,0.92))]">
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
                        <div className="relative flex h-full min-h-[280px] items-end p-6">
                          {!featuredProjectImage ? (
                            <div className="w-full rounded-[22px] border border-white/8 bg-white/[0.03] p-5 backdrop-blur-sm">
                              <div className="flex items-center justify-between gap-4">
                                <div>
                                  <p className="text-[0.64rem] uppercase tracking-[0.22em] text-cyan-300/88">
                                    {content.featuredProject.visualEyebrow}
                                  </p>
                                  <p className="mt-2 text-[0.98rem] font-medium text-white">
                                    {content.featuredProject.visualTitle}
                                  </p>
                                </div>
                                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.05] text-cyan-300">
                                  <Database className="h-7 w-7" />
                                </div>
                              </div>
                              <div className="mt-5 flex items-center gap-2 text-[0.74rem] text-slate-300">
                                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                                {content.featuredProject.visualSummary}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>

                  <div className="grid gap-6 lg:grid-cols-[repeat(3,minmax(0,1fr))]">
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
