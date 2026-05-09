import {
  ArrowDownToLine,
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  Download,
  Layers2,
  Workflow,
} from "lucide-react";

import type { ManagedContent } from "@/types/managed-content";
import { MobilePageBackground } from "@/mobile/layout/MobilePageBackground";
import { MobileGlassCard } from "@/mobile/ui/MobileGlassCard";

type ResumeMobilePageProps = {
  content: ManagedContent;
};

const experienceIcons = {
  workflow: Workflow,
  bot: Bot,
  "layers-2": Layers2,
} as const;

export function ResumeMobilePage({ content }: ResumeMobilePageProps) {
  return (
    <MobilePageBackground>
      <div className="mx-auto flex w-full max-w-[32rem] flex-col gap-4 px-4 pb-5 pt-2 min-[380px]:px-5">
        <p className="px-1 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
          Resume
        </p>

        <MobileGlassCard className="px-3.5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[0.72rem] border border-cyan-200/14 bg-cyan-300/[0.08] text-cyan-100">
              <BookOpenText className="h-4 w-4" strokeWidth={1.55} />
            </span>
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.035em] text-white">
              Education
            </h2>
          </div>

          <div className="mt-3 border-l border-white/10 pl-3.5">
            {content.resume.education.map((item) => (
              <article key={item.title} className="relative pb-3.5 last:pb-0">
                <span className="absolute -left-[1rem] top-1.5 h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_14px_rgba(158,200,185,0.62)]" />
                <h3 className="text-[0.95rem] font-semibold leading-5 text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.82rem] leading-5 text-slate-300/88">
                  {item.subtitle}
                </p>
                <p className="mt-1 text-[0.72rem] font-medium text-cyan-200/86">
                  {item.period}
                </p>
                {item.bullets.length ? (
                  <ul className="mt-2 grid gap-1 text-[0.8rem] leading-5 text-slate-300/84">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </MobileGlassCard>

        <MobileGlassCard className="px-3.5 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[0.72rem] border border-cyan-200/14 bg-cyan-300/[0.08] text-cyan-100">
              <BriefcaseBusiness className="h-4 w-4" strokeWidth={1.55} />
            </span>
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.035em] text-white">
              Experience
            </h2>
          </div>

          <div className="mt-3 grid gap-2.5">
            {content.resume.experience.map((item) => {
              const Icon = experienceIcons[item.icon];

              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[0.9rem] border border-cyan-200/12 bg-white/[0.035] px-3 py-3"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(158,200,185,0.14),transparent_26%)]"
                  />
                  <div className="relative z-10">
                    <div className="flex items-start gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.72rem] border border-cyan-200/14 bg-cyan-300/[0.08] text-cyan-100">
                        <Icon className="h-4 w-4" strokeWidth={1.55} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[0.98rem] font-semibold leading-5 text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[0.76rem] leading-4 text-cyan-200/86">
                          {item.subtitle}
                          {item.meta ? ` / ${item.meta}` : ""}
                        </p>
                        <p className="mt-1 text-[0.7rem] text-slate-400">
                          {item.period}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-3 grid gap-1 text-[0.8rem] leading-5 text-slate-300/86">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </MobileGlassCard>

        <a
          href={content.resume.downloadHref}
          download
          className="inline-flex min-h-[2.9rem] w-fit items-center gap-2.5 self-center rounded-[0.85rem] border border-cyan-100/35 bg-[linear-gradient(135deg,#b7e7d4,#8fc7b4)] px-4 text-[0.86rem] font-semibold text-slate-950 shadow-[0_12px_26px_rgba(116,206,178,0.18)] transition active:translate-y-px"
        >
          <Download className="h-4 w-4" strokeWidth={2} />
          {content.resume.downloadLabel}
          <ArrowDownToLine className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </MobilePageBackground>
  );
}
