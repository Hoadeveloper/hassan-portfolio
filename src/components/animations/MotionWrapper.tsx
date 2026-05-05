"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
