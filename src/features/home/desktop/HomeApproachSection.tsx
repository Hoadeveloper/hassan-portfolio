"use client";

import { CheckSquare2, Lightbulb, ShieldCheck, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ManagedContent } from "@/types/managed-content";

const iconMap = {
  "check-square-2": CheckSquare2,
  lightbulb: Lightbulb,
  workflow: Workflow,
  "shield-check": ShieldCheck,
} as const;

type HomeApproachSectionProps = ManagedContent["home"]["section2"];

export function HomeApproachSection({
  eyebrow,
  headingLine1,
  headingLine2,
  descriptionPrimary,
  descriptionSecondary,
  tags,
  quote,
  principleCards,
}: HomeApproachSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionEnabled = !prefersReducedMotion;

  return (
    <div className="relative h-full overflow-visible">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={motionEnabled ? { opacity: 0.38 } : false}
        animate={motionEnabled ? { opacity: [0.34, 0.46, 0.34] } : undefined}
        transition={motionEnabled ? { duration: 12, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,200,185,0.08),transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.04)_1px,transparent_1px)] bg-[size:96px_96px] opacity-24" />
        <div className="absolute inset-x-0 top-[12%] h-px bg-white/[0.06]" />
        <div className="absolute inset-x-0 bottom-[14%] h-px bg-white/[0.06]" />
        <div className="absolute left-[8%] top-[14%] bottom-[10%] w-px bg-white/[0.06]" />
        <div className="absolute right-[36%] top-[14%] bottom-[10%] hidden w-px bg-white/[0.06] lg:block" />
        <div className="absolute left-[18%] top-[74%] h-[3px] w-[22%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.95),transparent)] blur-[1px]" />
        <div className="absolute right-[10%] top-[18%] h-[3px] w-[24%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(215,235,228,0.95),transparent)] blur-[1px]" />
        <div className="absolute left-[22%] top-[24%] h-2.5 w-2.5 rounded-full bg-cyan-100/72 shadow-[0_0_14px_rgba(158,200,185,0.6)]" />
        <div className="absolute left-[23%] top-[25%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.22),transparent_72%)] blur-md" />
        <div className="absolute left-[54%] top-[33%] h-2 w-2 rounded-full bg-cyan-100/70 shadow-[0_0_14px_rgba(158,200,185,0.55)]" />
        <div className="absolute left-[54%] top-[33%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_74%)] blur-md" />
        <div className="absolute right-[15%] top-[58%] h-2.5 w-2.5 rounded-full bg-cyan-100/68 shadow-[0_0_14px_rgba(158,200,185,0.52)]" />
        <div className="absolute right-[15%] top-[58%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_72%)] blur-md" />
        <div className="absolute left-[32%] bottom-[12%] h-2 w-2 rounded-full bg-slate-100/55 shadow-[0_0_12px_rgba(226,232,240,0.18)]" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 760"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M290 675C430 652 520 626 604 564C688 502 708 416 784 352C865 283 987 231 1148 124"
            stroke="rgba(215,235,228,0.34)"
            strokeWidth="1.6"
          />
          <path
            d="M198 704C365 668 498 628 613 545C748 448 764 298 988 216"
            stroke="rgba(158,200,185,0.2)"
            strokeWidth="1.2"
          />
          <path
            d="M0 690C166 666 310 646 462 633C646 617 825 594 1200 495"
            stroke="rgba(158,200,185,0.14)"
            strokeWidth="1"
          />
        </svg>
        <div className="absolute left-[52%] top-[34%] h-[10rem] w-[10rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.14),transparent_68%)] blur-2xl sm:h-[14rem] sm:w-[14rem] sm:blur-3xl" />
        <div className="absolute right-[18%] top-[48%] h-[9rem] w-[9rem] rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.12),transparent_70%)] blur-2xl sm:h-[12rem] sm:w-[12rem] sm:blur-3xl" />
      </motion.div>

      <div className="relative z-10 h-full pt-0">
        <div className="grid h-full min-h-0 gap-4 lg:grid-cols-[52px_minmax(0,1fr)] lg:gap-6">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[6.25rem]">
            <span className="text-[0.82rem] font-semibold tracking-[0.06em] text-cyan-300/92">
              02
            </span>
            <span className="mt-3 h-11 w-px bg-[linear-gradient(180deg,rgba(158,200,185,0.34),rgba(255,255,255,0.06))]" />
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-200/55" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/35" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/20" />
            </div>
          </div>

          <div className="grid h-full min-h-0 gap-5 lg:grid-cols-[minmax(0,1fr)_1px_minmax(320px,0.8fr)] lg:gap-8 lg:pl-2 lg:pr-4">
            <div className="grid min-h-0 gap-4 lg:h-full lg:grid-rows-[auto_auto_1fr]">
              <motion.div
                initial={motionEnabled ? { opacity: 0, y: 20 } : false}
                animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                transition={motionEnabled ? { duration: 0.45, ease: "easeOut", delay: 0.08 } : undefined}
                className="space-y-3"
              >
                <div className="flex items-center gap-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-[0.8rem]">
                    {eyebrow}
                  </p>
                  <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(158,200,185,0.85),rgba(255,255,255,0.08)_72%,transparent)] lg:block" />
                </div>
                <h2 className="max-w-none text-[1.08rem] font-normal leading-[1.12] tracking-[-0.014em] text-white sm:text-[1.22rem] lg:text-[1.5rem] lg:leading-[1.1] lg:tracking-[-0.016em]">
                  {headingLine1}
                  <br />
                  {headingLine2}
                </h2>
                <div className="h-px w-full bg-white/[0.08] lg:max-w-[18rem]" />
              </motion.div>

              <motion.div
                initial={motionEnabled ? { opacity: 0, y: 22 } : false}
                animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.16 } : undefined}
                className="space-y-4"
              >
                <p className="max-w-[30rem] text-[0.88rem] leading-6 text-slate-300/90 sm:text-[0.94rem] sm:leading-7 lg:max-w-[26rem]">
                  {descriptionPrimary}
                </p>
                <p className="max-w-[30rem] pt-3 text-[0.88rem] leading-6 text-slate-300/84 sm:text-[0.94rem] sm:leading-7 lg:max-w-[26rem]">
                  {descriptionSecondary}
                </p>
              </motion.div>

              <div className="grid gap-3 self-end lg:content-end">
                <motion.div
                  initial={motionEnabled ? { opacity: 0, y: 18 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.45, ease: "easeOut", delay: 0.24 } : undefined}
                  className="flex flex-wrap gap-2"
                >
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[11px] border border-cyan-200/14 bg-slate-950/18 px-3 py-1 text-[0.7rem] font-medium tracking-[0.02em] text-slate-200/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <div className="h-px w-full bg-white/[0.08]" />

                <motion.blockquote
                  initial={motionEnabled ? { opacity: 0, y: 20 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.3 } : undefined}
                  className="relative rounded-[14px] border border-cyan-300/28 bg-[linear-gradient(145deg,rgba(27,66,66,0.68),rgba(9,38,53,0.54))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_44px_rgba(9,38,53,0.28)]"
                >
                  <div className="absolute inset-y-[14%] left-0 w-[2px] rounded-full bg-[linear-gradient(180deg,transparent,rgba(158,200,185,0.9),transparent)]" />
                  <div className="flex items-start gap-4">
                    <p className="text-[1.8rem] leading-none text-cyan-200/92">&ldquo;</p>
                    <p className="mt-1 max-w-[22rem] text-[0.98rem] italic leading-[1.55] text-slate-100/92 sm:text-[1.08rem] lg:max-w-[23rem]">
                      {quote}
                    </p>
                  </div>
                </motion.blockquote>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/[0.12]" />
              <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-cyan-300/70 bg-slate-950 shadow-[0_0_18px_rgba(158,200,185,0.2)]" />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-cyan-200" />
            </div>

            <motion.div
              initial={motionEnabled ? { opacity: 0, x: 18 } : false}
              animate={motionEnabled ? { opacity: 1, x: 0 } : undefined}
              transition={motionEnabled ? { duration: 0.55, ease: "easeOut", delay: 0.18 } : undefined}
              className="relative hidden lg:flex lg:min-h-0 lg:self-stretch"
            >
              <div className="relative mx-auto flex h-full w-full max-w-[28rem] flex-col rounded-[1.6rem] border border-cyan-300/22 bg-[linear-gradient(180deg,rgba(27,66,66,0.54),rgba(9,38,53,0.46))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_70px_rgba(9,38,53,0.22)]">
                <div className="absolute inset-[1.35rem] rounded-[1.1rem] border border-white/[0.08]" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-4">
                  {principleCards.map((card, index) => {
                    const Icon = iconMap[card.icon];

                    return (
                      <motion.div
                        key={card.title}
                        initial={motionEnabled ? { opacity: 0, x: 20 } : false}
                        animate={motionEnabled ? { opacity: 1, x: 0 } : undefined}
                        transition={
                          motionEnabled
                            ? { duration: 0.45, ease: "easeOut", delay: 0.22 + index * 0.07 }
                            : undefined
                        }
                        className="group relative overflow-hidden rounded-[18px] border border-cyan-300/18 bg-[linear-gradient(145deg,rgba(27,66,66,0.9),rgba(9,38,53,0.84)_60%,rgba(92,131,116,0.16))] px-4 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(9,38,53,0.28)]"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(158,200,185,0.12),transparent_30%)]" />
                        <div className="absolute inset-y-[18%] left-0 w-[3px] bg-[linear-gradient(180deg,transparent,rgba(158,200,185,0.95),transparent)] shadow-[0_0_16px_rgba(158,200,185,0.24)]" />
                        <div className="absolute -left-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.2),transparent_72%)] blur-2xl opacity-70 transition duration-500 group-hover:opacity-100" />

                        <div className="relative flex items-start gap-3.5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[11px] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(92,131,116,0.28),rgba(27,66,66,0.6))] text-cyan-100/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            <Icon strokeWidth={1.55} className="h-6 w-6" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[0.82rem] font-medium tracking-[-0.012em] text-white/96 sm:text-[0.88rem] lg:text-[0.94rem]">
                              {card.title}
                            </p>
                            <p className="mt-1 text-[0.72rem] leading-5 text-slate-300/82 sm:text-[0.78rem] lg:text-[0.84rem]">
                              {card.body}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
              transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.24 } : undefined}
              className="grid gap-4 lg:hidden"
            >
              {principleCards.map((card) => {
                const Icon = iconMap[card.icon];

                return (
                  <div
                    key={card.title}
                    className="rounded-[20px] border border-cyan-300/18 bg-[linear-gradient(145deg,rgba(27,66,66,0.9),rgba(9,38,53,0.84)_60%,rgba(92,131,116,0.16))] px-5 py-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] border border-white/14 bg-white/[0.03] text-cyan-100/92">
                        <Icon strokeWidth={1.55} className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-white/96">{card.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-300/82">{card.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
