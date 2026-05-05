"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type HomeHeroScrollSceneProps = {
  left: ReactNode;
  right: ReactNode;
};

export function HomeHeroScrollScene({ left, right }: HomeHeroScrollSceneProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.45,
  });

  const leftY = useTransform(progress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -92]);
  const leftOpacity = useTransform(progress, [0, 0.8, 1], [1, 0.88, 0.66]);
  const leftScale = useTransform(progress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 0.965]);

  const rightY = useTransform(progress, [0, 1], prefersReducedMotion ? [0, 0] : [18, -60]);
  const rightRotate = useTransform(progress, [0, 1], prefersReducedMotion ? [0, 0] : [0, -4.5]);
  const rightScale = useTransform(progress, [0, 1], prefersReducedMotion ? [1, 1] : [1, 1.035]);

  const glowX = useTransform(progress, [0, 1], prefersReducedMotion ? ["20%", "20%"] : ["18%", "76%"]);
  const glowY = useTransform(progress, [0, 1], prefersReducedMotion ? ["18%", "18%"] : ["10%", "28%"]);
  const glowOpacity = useTransform(progress, [0, 0.65, 1], [0.2, 0.36, 0.1]);

  const meterScale = useTransform(progress, [0, 1], [0.12, 1]);
  const meterOpacity = useTransform(progress, [0, 0.2, 1], [0.45, 0.85, 1]);
  const cueY = useTransform(progress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 26]);
  const cueOpacity = useTransform(progress, [0, 0.75, 1], [0.88, 0.54, 0]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ opacity: glowOpacity }}
      >
        <motion.div
          className="absolute h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(158,200,185,0.16)_0%,_rgba(158,200,185,0.08)_34%,_transparent_74%)] blur-3xl"
          style={{ x: glowX, y: glowY }}
        />
      </motion.div>

      <div className="grid min-h-[calc(100vh-8rem)] items-start gap-10 xl:grid-cols-[minmax(0,1.38fr)_minmax(296px,0.5fr)] xl:gap-12">
        <motion.div
          className="flex min-w-0 flex-col justify-center gap-6 sm:gap-7"
          style={{ y: leftY, opacity: leftOpacity, scale: leftScale }}
        >
          {left}
        </motion.div>

        <motion.div className="pt-2 xl:pt-5" style={{ y: rightY, rotate: rightRotate, scale: rightScale }}>
          {right}
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-0 hidden items-center gap-4 xl:flex"
        style={{ y: cueY, opacity: cueOpacity }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200/90">
          Scroll signal
        </span>
        <div className="h-px w-32 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full origin-left bg-[linear-gradient(90deg,rgba(158,200,185,1),rgba(92,131,116,0.55))]"
            style={{ scaleX: meterScale, opacity: meterOpacity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
