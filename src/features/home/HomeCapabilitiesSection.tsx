"use client";

import {
  AppWindow,
  Bot,
  Code2,
  Database,
  Send,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ManagedContent } from "@/types/managed-content";

const iconMap = {
  "code-2": Code2,
  database: Database,
  "app-window": AppWindow,
  send: Send,
  bot: Bot,
  "shield-check": ShieldCheck,
} as const;

type HomeCapabilitiesSectionProps = ManagedContent["home"]["section3"];

export function HomeCapabilitiesSection({
  eyebrow,
  heading,
  description,
  sideNote,
  capabilities,
}: HomeCapabilitiesSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionEnabled = !prefersReducedMotion;

  return (
    <div className="relative h-full overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={motionEnabled ? { opacity: 0.42 } : false}
        animate={motionEnabled ? { opacity: [0.36, 0.5, 0.36] } : undefined}
        transition={motionEnabled ? { duration: 12, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,200,185,0.12),transparent_34%),linear-gradient(180deg,rgba(27,66,66,0.16),rgba(9,38,53,0.3))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.035)_1px,transparent_1px)] bg-[size:88px_88px] opacity-28" />
        <div className="absolute right-[8%] top-[4%] h-[12rem] w-[12rem] rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.12),transparent_68%)] blur-2xl sm:h-[18rem] sm:w-[18rem] sm:blur-3xl" />
        <div className="absolute right-[4%] top-[14%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(27,66,66,0.12),transparent_72%)] blur-2xl sm:h-[34rem] sm:w-[34rem] sm:blur-3xl" />
        <div className="absolute left-[34%] top-0 h-[2px] w-[16%] bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.9),transparent)] blur-[1px]" />
        <div className="absolute left-[38%] top-[12%] h-2.5 w-2.5 rounded-full bg-cyan-100/72 shadow-[0_0_14px_rgba(158,200,185,0.58)]" />
        <div className="absolute left-[38%] top-[12%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_72%)] blur-md" />
        <div className="absolute right-[18%] top-[24%] h-2 w-2 rounded-full bg-cyan-100/68 shadow-[0_0_14px_rgba(158,200,185,0.54)]" />
        <div className="absolute right-[18%] top-[24%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_74%)] blur-md" />
        <div className="absolute left-[24%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-cyan-100/64 shadow-[0_0_12px_rgba(158,200,185,0.46)]" />
        <div className="absolute left-[24%] bottom-[16%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.14),transparent_74%)] blur-md" />
        <div className="absolute right-[30%] bottom-[11%] h-2 w-2 rounded-full bg-slate-100/55 shadow-[0_0_12px_rgba(226,232,240,0.18)]" />
        <svg
          className="absolute right-0 top-[7%] hidden h-[46%] w-[46%] lg:block"
          viewBox="0 0 620 360"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 320C124 284 218 264 312 222C420 174 516 90 620 0"
            stroke="rgba(158,200,185,0.28)"
            strokeWidth="1.8"
          />
          <path
            d="M0 340C118 315 252 304 388 252C486 214 560 154 620 102"
            stroke="rgba(92,131,116,0.12)"
            strokeWidth="1.2"
          />
        </svg>
        <div className="absolute right-[12%] top-[11%] hidden h-[34%] w-[26%] rounded-full border border-cyan-300/8 lg:block" />
      </motion.div>

      <div className="relative z-10 flex h-full min-h-0 items-start py-1 sm:py-1.5 lg:py-2">
        <div className="relative grid w-full min-h-0 gap-4 lg:h-full lg:grid-cols-[52px_minmax(0,1fr)] lg:gap-5">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[5.25rem]">
            <span className="text-[0.82rem] font-semibold tracking-[0.06em] text-cyan-300/92">
              03
            </span>
            <span className="mt-3 h-11 w-px bg-[linear-gradient(180deg,rgba(158,200,185,0.34),rgba(255,255,255,0.06))]" />
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-200/55" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/35" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/20" />
            </div>
          </div>

          <div className="space-y-4 lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch lg:gap-8 lg:space-y-0">
            <div className="space-y-4 lg:min-h-0 lg:pr-2">
              <motion.div
                initial={motionEnabled ? { opacity: 0, y: 20 } : false}
                animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                transition={motionEnabled ? { duration: 0.48, ease: "easeOut", delay: 0.06 } : undefined}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-300 sm:text-[0.8rem]">
                    {eyebrow}
                  </p>
                  <div className="h-px w-16 bg-[linear-gradient(90deg,rgba(158,200,185,0.82),rgba(158,200,185,0.12))]" />
                </div>

                <h2 className="max-w-full whitespace-nowrap text-[1.08rem] font-normal leading-[1.05] tracking-[-0.03em] text-white sm:text-[1.22rem] lg:text-[1.5rem]">
                  {heading}
                </h2>

                <p className="max-w-[36rem] text-[0.88rem] leading-6 text-slate-300/88 sm:text-[0.94rem] sm:leading-7 lg:max-w-[30rem]">
                  {description}
                </p>
              </motion.div>

              <motion.aside
                initial={motionEnabled ? { opacity: 0, x: 14 } : false}
                animate={motionEnabled ? { opacity: 1, x: 0 } : undefined}
                transition={motionEnabled ? { duration: 0.44, ease: "easeOut", delay: 0.14 } : undefined}
                className="flex items-start gap-3 rounded-[1rem] border border-cyan-300/12 bg-[#1b4242]/35 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:mt-6 lg:max-w-[16rem]"
              >
                <div className="mt-1 hidden h-12 w-px bg-[linear-gradient(180deg,rgba(158,200,185,0.2),rgba(158,200,185,0.9),rgba(158,200,185,0.2))] lg:block" />
                <motion.p
                  className="max-w-[12rem] bg-[linear-gradient(90deg,rgba(207,250,254,0.96),rgba(158,200,185,0.95),rgba(244,250,247,0.92))] bg-[length:200%_100%] bg-clip-text text-[0.88rem] leading-6 text-transparent"
                  initial={motionEnabled ? { opacity: 0, y: 10 } : false}
                  animate={
                    motionEnabled
                      ? {
                          opacity: 1,
                          y: 0,
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }
                      : undefined
                  }
                  transition={
                    motionEnabled
                      ? {
                          opacity: { duration: 0.4, ease: "easeOut", delay: 0.2 },
                          y: { duration: 0.4, ease: "easeOut", delay: 0.2 },
                          backgroundPosition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                      : undefined
                  }
                >
                  {sideNote.split("\n").map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </motion.p>
              </motion.aside>
            </div>

            <motion.div
              initial={motionEnabled ? { opacity: 0, y: 20 } : false}
              animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
              transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.2 } : undefined}
              className="grid content-start gap-2 md:grid-cols-2 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:grid-rows-[repeat(3,minmax(0,1fr))] lg:gap-1"
            >
              {capabilities.map((card, index) => {
                const Icon = iconMap[card.icon];

                  return (
                    <motion.article
                      key={card.title}
                      initial={motionEnabled ? { opacity: 0, y: 18 } : false}
                      animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                      transition={
                        motionEnabled
                          ? { duration: 0.42, ease: "easeOut", delay: 0.22 + index * 0.04 }
                          : undefined
                      }
                      className="group relative h-full min-h-0 w-full overflow-hidden rounded-[0.9rem] border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(27,66,66,0.94),rgba(9,38,53,0.9)_58%,rgba(92,131,116,0.18))] px-2.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_14px_24px_rgba(9,38,53,0.22)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(158,200,185,0.12),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.025),transparent_34%,transparent_72%,rgba(158,200,185,0.06))]" />
                      <div className="absolute inset-x-[8%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.82),transparent)] opacity-80" />
                      <div className="absolute left-0 top-[18%] h-[34%] w-[3px] bg-[linear-gradient(180deg,transparent,rgba(158,200,185,0.95),transparent)] shadow-[0_0_16px_rgba(158,200,185,0.24)]" />
                      <div className="absolute right-[-10%] top-[-4%] h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.14),transparent_72%)] blur-2xl opacity-60 transition duration-500 group-hover:opacity-100" />

                      <div className="relative z-10 flex h-full min-h-0 flex-col">
                        <div className="mb-1.5 flex h-7.5 w-7.5 items-center justify-center rounded-[0.6rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(92,131,116,0.34),rgba(27,66,66,0.72))] text-cyan-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_20px_rgba(9,38,53,0.18)]">
                          <Icon className="h-4 w-4" strokeWidth={1.7} />
                        </div>

                        <h3 className="max-w-[9rem] text-[0.68rem] font-semibold leading-4 tracking-[-0.018em] text-white sm:text-[0.74rem]">
                          {card.title}
                        </h3>

                        <div className="mt-1 h-[2px] w-5 rounded-full bg-[linear-gradient(90deg,rgba(158,200,185,0.95),rgba(158,200,185,0.2))]" />

                        <p className="mt-1 line-clamp-3 text-[0.58rem] leading-4 text-slate-300/82 sm:text-[0.64rem]">
                          {card.body}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
