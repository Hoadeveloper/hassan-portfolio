"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type HomeScrollViewportProps = {
  children: ReactNode;
};

type HomeScrollSectionProps = {
  children: ReactNode;
  index: string;
  label: string;
};

export function HomeScrollViewport({ children }: HomeScrollViewportProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
  });

  const orbitRotate = useTransform(progress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 12]);
  const beamY = useTransform(progress, [0, 1], prefersReducedMotion ? ["0%", "0%"] : ["-12%", "22%"]);
  const pulseScale = useTransform(progress, [0, 1], prefersReducedMotion ? [1, 1] : [0.92, 1.08]);

  useEffect(() => {
    const element = document.documentElement;
    element.setAttribute("data-home-scroll", "true");

    return () => element.removeAttribute("data-home-scroll");
  }, []);

  return (
    <div className="home-scroll-shell relative pb-6 sm:pb-8">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-white/5">
        <motion.div
          className="h-full origin-left bg-[linear-gradient(90deg,#9ec8b9_0%,#9ec8b9_35%,#5c8374_75%,#d7ebe4_100%)] shadow-[0_0_30px_rgba(158,200,185,0.55)]"
          style={{ scaleX: progress }}
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-[12vh] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-cyan-300/10"
          style={{ rotate: orbitRotate }}
        />
        <motion.div
          className="absolute left-1/2 top-[12vh] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full border border-cyan-300/10"
          style={{ rotate: orbitRotate }}
        />
        <motion.div
          className="absolute left-[8%] top-0 h-[28rem] w-[22rem] bg-[radial-gradient(circle,_rgba(158,200,185,0.12)_0%,_transparent_72%)] blur-3xl"
          style={{ y: beamY, scale: pulseScale }}
        />
        <motion.div
          className="absolute right-[2%] top-[24vh] h-[30rem] w-[24rem] bg-[radial-gradient(circle,_rgba(92,131,116,0.12)_0%,_transparent_70%)] blur-3xl"
          style={{ y: beamY, scale: pulseScale }}
        />
      </div>

      <div className="relative space-y-3 px-1.5 pt-2 sm:space-y-4 sm:px-2 lg:space-y-5 lg:px-3">
        {children}
      </div>
    </div>
  );
}

export function HomeScrollSection({
  children,
  index,
  label,
}: HomeScrollSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "end 0.12"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [56, 0, -34]);
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [0, 0, 0] : [8, 0, -5],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    prefersReducedMotion ? [1, 1, 1] : [0.975, 1, 0.985],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.55, 1], [0.7, 0.9, 1, 0.72]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.06, 0.18, 0.08]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.04, 0.16, 0.05]);
  const labelX = useTransform(scrollYProgress, [0, 0.45, 1], prefersReducedMotion ? [0, 0, 0] : [-12, 0, 10]);

  return (
    <motion.div
      ref={ref}
      className="scroll-stage group relative min-h-[100svh] snap-start lg:min-h-[96svh]"
      style={{ y, rotateX, scale, opacity }}
    >
      <div
        aria-hidden="true"
        className="scroll-stage-panel pointer-events-none absolute inset-x-1 inset-y-1 rounded-[2rem] sm:inset-x-2 sm:inset-y-2"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 inset-y-5 rounded-[2rem] border border-cyan-300/14 bg-[radial-gradient(circle_at_top,rgba(158,200,185,0.12),transparent_58%)] blur-2xl sm:inset-x-5 sm:inset-y-6"
        style={{ opacity: glowOpacity }}
      />

      <motion.div
        aria-hidden="true"
        className="scroll-stage-frame pointer-events-none absolute inset-x-1 inset-y-1 rounded-[2rem] border border-white/8 sm:inset-x-2 sm:inset-y-2"
        style={{ opacity: borderOpacity }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 hidden lg:block" aria-hidden="true">
        <div className="mx-auto flex max-w-6xl items-center px-6 pt-10 sm:px-9 lg:px-11">
          <motion.div className="flex items-center gap-4" style={{ x: labelX }}>
            <span className="min-w-[1.75rem] text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/65">
              {index}
            </span>
            <span className="h-px w-[4.5rem] bg-cyan-200/28" />
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-slate-400/75">
              {label}
            </span>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center py-[4.5rem] sm:py-20 lg:min-h-[96svh] lg:py-24">
        {children}
      </div>
    </motion.div>
  );
}
