"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { ManagedContent } from "@/types/managed-content";

type HomeArrivalSectionProps = ManagedContent["home"]["section1"] & {
  profileImage?: string;
};

export function HomeArrivalSection({
  eyebrow,
  name,
  roleLine,
  profileRole,
  description,
  statusText,
  highlights,
  primaryCta,
  secondaryCta,
  profileImage,
}: HomeArrivalSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const motionEnabled = !prefersReducedMotion;
  const [typedAvailability, setTypedAvailability] = useState("");
  const profileCardName = "Hassan O.A";

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
        setTypedAvailability(statusText.slice(0, index));

        if (index >= statusText.length) {
          holdFrames += 1;

          if (holdFrames >= 22) {
            deleting = true;
            holdFrames = 0;
          }
        }

        return;
      }

      index -= 1;
      setTypedAvailability(statusText.slice(0, Math.max(index, 0)));

      if (index <= 0) {
        deleting = false;
      }
    }, 42);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [prefersReducedMotion, statusText]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        initial={motionEnabled ? { opacity: 0.35 } : false}
        animate={motionEnabled ? { opacity: [0.35, 0.46, 0.35] } : undefined}
        transition={motionEnabled ? { duration: 10, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        <div className="absolute inset-x-[18%] top-[8%] h-[14rem] rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.1),transparent_70%)] blur-2xl sm:h-[18rem] sm:blur-3xl" />
        <div className="absolute right-[8%] top-[20%] h-[10rem] w-[10rem] rounded-full bg-[radial-gradient(circle,rgba(92,131,116,0.08),transparent_72%)] blur-2xl sm:h-[14rem] sm:w-[14rem] sm:blur-3xl" />
        <div className="absolute right-[14%] top-[18%] hidden h-[28rem] w-[28rem] rounded-full border border-cyan-300/8 lg:block" />
        <div className="absolute right-[20%] top-[26%] hidden h-[18rem] w-[18rem] rounded-full border border-white/[0.05] lg:block" />
        <div className="absolute left-[24%] top-[18%] h-2.5 w-2.5 rounded-full bg-cyan-100/72 shadow-[0_0_14px_rgba(158,200,185,0.6)]" />
        <div className="absolute left-[24%] top-[18%] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.2),transparent_72%)] blur-md" />
        <div className="absolute left-[56%] top-[30%] h-2 w-2 rounded-full bg-cyan-100/68 shadow-[0_0_14px_rgba(158,200,185,0.54)]" />
        <div className="absolute left-[56%] top-[30%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_74%)] blur-md" />
        <div className="absolute right-[18%] top-[58%] h-2.5 w-2.5 rounded-full bg-cyan-100/64 shadow-[0_0_12px_rgba(158,200,185,0.44)]" />
        <div className="absolute right-[18%] top-[58%] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.16),transparent_74%)] blur-md" />
        <div className="absolute left-[38%] bottom-[14%] h-2 w-2 rounded-full bg-slate-100/55 shadow-[0_0_12px_rgba(226,232,240,0.18)]" />
      </motion.div>

      <div className="relative z-10 flex h-full items-start">
        <div className="grid w-full gap-4 lg:h-full lg:grid-cols-[52px_minmax(0,1fr)] lg:items-start lg:gap-5">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[1.15rem]">
            <span className="text-[0.82rem] font-semibold tracking-[0.06em] text-cyan-300/92">
              01
            </span>
            <span className="mt-3 h-11 w-px bg-[linear-gradient(180deg,rgba(158,200,185,0.34),rgba(255,255,255,0.06))]" />
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-200/55" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/35" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/20" />
            </div>
          </div>

          <div className="grid w-full items-start gap-6 py-1 sm:gap-7 sm:py-2 lg:grid-cols-[minmax(216px,0.24fr)_minmax(0,0.76fr)] lg:gap-12 lg:py-0">
            <motion.div
              initial={motionEnabled ? { opacity: 0, x: -20 } : false}
              animate={motionEnabled ? { opacity: 1, x: 0 } : undefined}
              transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.12 } : undefined}
              className="mx-auto mt-2 w-full max-w-[18rem] lg:mx-0 lg:-mt-5"
            >
              <Card className="relative overflow-hidden p-4 sm:p-5">
                <div className="absolute inset-x-[-8%] top-[-10%] h-32 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_70%)] blur-3xl" />

                <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.85),rgba(9,38,53,0.94))]">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(158,200,185,0.12),transparent_36%,transparent_72%,rgba(255,255,255,0.04))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-cyan-300/16 bg-cyan-300/[0.06] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-cyan-100">
                    Profile
                  </div>
                  <div className="relative aspect-[4/4.7] overflow-hidden">
                    {profileImage ? (
                      <Image
                        src={profileImage}
                        alt={`${profileCardName} portrait`}
                        fill
                        sizes="(max-width: 1024px) 18rem, 14rem"
                        className="object-cover"
                        priority
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
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.08),rgba(8,15,30,0.34))]" />
                  </div>
                </div>

                <div className="relative mt-4 space-y-2 px-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(158,200,185,0.9)]" />
                    </span>
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald-100/92">
                      Online
                    </span>
                  </div>
                  <p className="text-[0.98rem] font-semibold tracking-[-0.03em] text-white sm:text-[1.08rem]">
                    {profileCardName}
                  </p>
                  <p className="text-sm leading-6 text-slate-300/88">{profileRole}</p>
                  <div className="rounded-[18px] border border-cyan-400/10 bg-[#1b4242] px-3 py-3">
                    <p className="text-[0.6rem] uppercase tracking-[0.18em] text-slate-500">
                      Status
                    </p>
                    <p className="mt-2 min-h-[3rem] text-[0.7rem] leading-5 text-slate-200">
                      {(prefersReducedMotion ? statusText : typedAvailability) || "\u00A0"}
                      {!prefersReducedMotion ? (
                        <span
                          aria-hidden="true"
                          className="ml-0.5 inline-block h-[0.92em] w-[2px] translate-y-[0.12em] bg-cyan-200/80 align-top"
                        />
                      ) : null}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <div className="w-full max-w-[46rem] justify-self-center lg:justify-self-start">
              <div className="space-y-4 pt-0 sm:space-y-4 lg:pt-0">
                <motion.p
                  initial={motionEnabled ? { opacity: 0, y: 18 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.42, ease: "easeOut", delay: 0.08 } : undefined}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-[0.8rem]"
                >
                  {eyebrow}
                </motion.p>

                <motion.h1
                  initial={motionEnabled ? { opacity: 0, y: 22 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.52, ease: "easeOut", delay: 0.18 } : undefined}
                  className="max-w-[13ch] text-[1.72rem] font-semibold tracking-[-0.045em] text-white sm:max-w-none sm:text-[2.12rem] sm:leading-[0.98] lg:text-[2.95rem] lg:leading-[0.96]"
                >
                  {name}
                </motion.h1>

                <motion.div
                  initial={motionEnabled ? { opacity: 0, y: 22 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.28 } : undefined}
                  className="inline-flex min-h-[2.5rem] max-w-[39rem] items-center rounded-[16px] border border-cyan-300/12 bg-cyan-300/[0.04] px-3 py-2 sm:min-h-[2.9rem] sm:px-4"
                >
                  <p className="text-[0.95rem] font-medium tracking-[0.005em] text-cyan-100/92 sm:text-[1.05rem]">
                    {roleLine}
                  </p>
                </motion.div>

                <motion.p
                  initial={motionEnabled ? { opacity: 0, y: 22 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.5, ease: "easeOut", delay: 0.36 } : undefined}
                  className="max-w-[41rem] text-[0.88rem] leading-6 text-slate-300/90 sm:text-[0.94rem] sm:leading-7 lg:text-[0.98rem]"
                >
                  {description}
                </motion.p>

                <motion.div
                  initial={motionEnabled ? { opacity: 0, y: 18 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.45, ease: "easeOut", delay: 0.46 } : undefined}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[18px] border border-white/10 bg-white/[0.035] px-4 py-3.5"
                    >
                      <span className="block h-1.5 w-10 rounded-full bg-cyan-300/55" />
                      <p className="mt-3 text-sm font-medium text-slate-200/90">{item}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={motionEnabled ? { opacity: 0, y: 18 } : false}
                  animate={motionEnabled ? { opacity: 1, y: 0 } : undefined}
                  transition={motionEnabled ? { duration: 0.45, ease: "easeOut", delay: 0.58 } : undefined}
                  className="flex flex-col gap-3 pt-2 sm:flex-row"
                >
                  <Button href={primaryCta.href} className="w-full sm:w-auto">
                    {primaryCta.label}
                  </Button>
                  <Button href={secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
                    {secondaryCta.label}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
