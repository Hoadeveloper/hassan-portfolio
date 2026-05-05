"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
};

export function TypewriterText({
  text,
  className,
  delay = 0,
  speed = 0.03,
  cursor = true,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const characters = Array.from(text);
  const shouldAnimate = !prefersReducedMotion && characters.length <= 40;

  if (!shouldAnimate) {
    return <span className={cn("inline", className)}>{text}</span>;
  }

  return (
    <span className={cn("inline", className)} aria-label={text}>
      <span className="sr-only">{text}</span>

      <motion.span
        aria-hidden="true"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: speed,
              delayChildren: delay,
            },
          },
        }}
      >
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="whitespace-pre"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.02 }}
          >
            {char}
          </motion.span>
        ))}

        {cursor ? (
          <motion.span
            aria-hidden="true"
            className="ml-1 inline-block text-cyan-200"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.9,
              repeat: 5,
              ease: "easeInOut",
            }}
          >
            |
          </motion.span>
        ) : null}
      </motion.span>
    </span>
  );
}
