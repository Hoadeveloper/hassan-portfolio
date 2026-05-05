"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  ArrowDownToLine,
  BookOpenText,
  BriefcaseBusiness,
  Bot,
  Download,
  Layers2,
  Workflow,
} from "lucide-react";
import { useReducedMotion } from "framer-motion";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import type { ManagedContent } from "@/types/managed-content";

const experienceIconMap = {
  workflow: Workflow,
  bot: Bot,
  "layers-2": Layers2,
} as const;

function ResumeSectionHeading({
  id,
  title,
  icon: Icon,
}: {
  id: string;
  title: string;
  icon: typeof BookOpenText;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-[16px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(27,66,66,0.92),rgba(9,38,53,0.72))] text-cyan-300 shadow-[0_12px_28px_rgba(9,38,53,0.22)]">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <h2 id={id} className="text-[1.7rem] font-medium tracking-[-0.02em] text-white sm:text-[1.92rem]">
        {title}
      </h2>
    </div>
  );
}

function EducationItem({
  title,
  subtitle,
  period,
  bullets,
}: ManagedContent["resume"]["education"][number]) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-[0.1rem] top-[0.5rem] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(158,200,185,0.6)]" />
      <div className="space-y-1.5 pb-8">
        <h3 className="text-[1.05rem] font-medium text-white sm:text-[1.18rem]">{title}</h3>
        <p className="text-[0.92rem] leading-7 text-slate-300/92">{subtitle}</p>
        <p className="pt-1 text-[0.84rem] text-cyan-300">{period}</p>
        {bullets.length ? (
          <ul className="space-y-2 pt-3 text-[0.9rem] leading-7 text-slate-300/88">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

function ExperienceCard({
  title,
  subtitle,
  period,
  meta,
  visualLabel,
  icon,
  bullets,
}: ManagedContent["resume"]["experience"][number]) {
  const Icon = experienceIconMap[icon];
  return (
    <article className="relative overflow-hidden rounded-[26px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.88))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_22px_54px_rgba(9,38,53,0.28)] sm:px-6 sm:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(158,200,185,0.18),transparent_18%),radial-gradient(circle_at_75%_85%,rgba(158,200,185,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(158,200,185,0.5)_0.7px,transparent_0.7px)] [background-size:92px_92px]" />
      <div className="pointer-events-none absolute right-5 top-5 flex h-[72px] w-[96px] items-center justify-center rounded-[20px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(17,33,56,0.86),rgba(10,20,35,0.7))] shadow-[0_0_22px_rgba(158,200,185,0.18)] sm:h-[82px] sm:w-[108px]">
        <Icon className="h-8 w-8 text-cyan-300/90" />
      </div>

      <div className="relative z-10 max-w-[calc(100%-7rem)] space-y-3 sm:max-w-[calc(100%-8.5rem)]">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-cyan-300/10 bg-[#1b4242] text-cyan-300">
            <Icon className="h-[18px] w-[18px]" />
          </div>
          <div className="min-w-0">
            <h3 className="text-[1.08rem] font-medium tracking-[-0.02em] text-white sm:text-[1.22rem]">
              {title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.86rem] leading-6">
              <span className="text-cyan-300">{subtitle}</span>
              {meta ? <span className="text-slate-500">{meta}</span> : null}
            </div>
          </div>
        </div>

        <div className="relative ml-5 border-l border-white/8 pl-8">
          {period !== subtitle ? <p className="pb-2 text-[0.84rem] text-cyan-300">{period}</p> : null}
          <ul className="space-y-2.5 text-[0.92rem] leading-7 text-slate-300/92">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-[0.72rem] h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-5 right-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/36">
        {visualLabel}
      </p>
    </article>
  );
}

type ResumeProps = {
  content: ManagedContent["resume"];
  profileImage?: string;
};

export function Resume({ content, profileImage }: ResumeProps) {
  const availabilityText = content.sidebarStatusText;
  const prefersReducedMotion = useReducedMotion();
  const [typedAvailability, setTypedAvailability] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let index = 0;
    let holdFrames = 0;
    let deleting = false;

    const intervalId = window.setInterval(() => {
      if (!deleting) {
        index += 1;
        setTypedAvailability(availabilityText.slice(0, index));

        if (index >= availabilityText.length) {
          holdFrames += 1;

          if (holdFrames >= 22) {
            deleting = true;
            holdFrames = 0;
          }
        }

        return;
      }

      index -= 1;
      setTypedAvailability(availabilityText.slice(0, Math.max(index, 0)));

      if (index <= 0) {
        deleting = false;
      }
    }, 42);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [availabilityText, prefersReducedMotion]);

  return (
    <section className="relative overflow-hidden pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_28%),radial-gradient(circle_at_20%_80%,rgba(92,131,116,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.03)_1px,transparent_1px)] bg-[size:84px_84px] opacity-35" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(158,200,185,0.5)_0.7px,transparent_0.7px)] [background-size:110px_110px]" />

      <Container className="relative z-10 max-w-[1260px]">
        <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[236px_minmax(0,1fr)]">
          <FadeIn className="lg:pt-1">
            <aside className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.92))] shadow-[0_24px_60px_rgba(9,38,53,0.34)]">
              <div className="px-4 pb-5 pt-5">
                <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.78),rgba(9,38,53,0.94))]">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(158,200,185,0.12),transparent_36%,transparent_72%,rgba(255,255,255,0.04))]" />
                  <div className="relative aspect-[4/4.7] overflow-hidden">
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt={`${content.sidebarName} portrait`}
                        fill
                        sizes="(max-width: 1024px) 220px, 236px"
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,200,185,0.16),transparent_38%),linear-gradient(180deg,rgba(8,15,30,0.12),rgba(8,15,30,0.62))]" />
                        <div className="absolute inset-x-[18%] top-[18%] h-[52%] rounded-t-[999px] rounded-b-[28px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
                        <div className="absolute left-1/2 top-[27%] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-200/16 bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(158,200,185,0.04))]" />
                        <div className="absolute left-1/2 top-[53%] h-24 w-36 -translate-x-1/2 rounded-t-[999px] rounded-b-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(158,200,185,0.04))]" />
                        <div className="absolute inset-x-[14%] bottom-[13%] flex items-center justify-center rounded-[18px] border border-white/8 bg-slate-950/24 px-3 py-2 backdrop-blur-sm">
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-200/78">
                            Portrait placeholder
                          </p>
                        </div>
                      </>
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(8,15,30,0.32))]" />
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(158,200,185,0.9)]" />
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald-100/92">
                      Online
                    </span>
                  </div>
                  <h1 className="text-[1.9rem] font-medium tracking-tight text-white">
                    {content.sidebarName}
                  </h1>
                  <div className="mt-4 inline-flex rounded-full border border-white/10 bg-[#1b4242] px-4 py-2 text-[0.78rem] text-slate-100">
                    {content.sidebarRole}
                  </div>
                </div>

                <div className="mt-6 rounded-[22px] border border-cyan-400/10 bg-[#1b4242] px-4 py-4">
                  <p className="text-[0.64rem] uppercase tracking-[0.18em] text-slate-500">Status</p>
                  <p className="mt-2 text-[0.8rem] leading-6 text-slate-200">
                    {(prefersReducedMotion ? availabilityText : typedAvailability) || "\u00A0"}
                    {!prefersReducedMotion ? (
                      <span
                        aria-hidden="true"
                        className="ml-0.5 inline-block h-[0.92em] w-[2px] translate-y-[0.12em] bg-cyan-200/80 align-top"
                      />
                    ) : null}
                  </p>
                </div>
              </div>
            </aside>
          </FadeIn>

          <FadeIn>
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.98),rgba(9,38,53,0.94))] shadow-[0_28px_72px_rgba(9,38,53,0.36)]">
              <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:radial-gradient(rgba(158,200,185,0.45)_0.7px,transparent_0.7px)] [background-size:104px_104px]" />
              <div className="relative px-7 pb-8 pt-8 sm:px-8 sm:pb-9 sm:pt-9 lg:px-9 lg:pb-10 lg:pt-9">
                <div className="space-y-8">
                  <header className="space-y-3">
                    <h2 className="text-[2.8rem] font-semibold tracking-tight text-white sm:text-[3.1rem]">
                      {content.pageTitle}
                    </h2>
                    <div className="h-1.5 w-11 rounded-full bg-cyan-300" />
                    <div className="h-px w-full bg-white/[0.06]" />
                  </header>

                  <section className="space-y-6" aria-labelledby="resume-education">
                    <ResumeSectionHeading
                      id="resume-education"
                      title="Education"
                      icon={BookOpenText}
                    />

                    <div className="relative ml-3 border-l border-white/8 pl-7">
                      {content.education.map((item) => (
                        <EducationItem key={item.title} {...item} />
                      ))}
                    </div>
                  </section>

                  <section className="space-y-6" aria-labelledby="resume-experience">
                    <ResumeSectionHeading
                      id="resume-experience"
                      title="Experience"
                      icon={BriefcaseBusiness}
                    />

                    <div className="space-y-5">
                      {content.experience.map((item) => (
                        <ExperienceCard key={item.title} {...item} />
                      ))}
                    </div>
                  </section>

                  <div className="flex justify-start pt-2 sm:justify-end">
                    <a
                      href={content.downloadHref}
                      className="inline-flex items-center gap-2.5 rounded-[18px] border border-white/8 bg-[#1b4242] px-5 py-3.5 text-[0.98rem] font-medium text-cyan-300 shadow-[0_12px_28px_rgba(9,38,53,0.22)] transition hover:bg-[#5c8374] hover:text-cyan-200"
                    >
                      <Download className="h-4 w-4" />
                      <span>{content.downloadLabel}</span>
                      <ArrowDownToLine className="h-4 w-4" />
                    </a>
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
