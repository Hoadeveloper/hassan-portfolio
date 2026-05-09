import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MobileGlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function MobileGlassCard({ children, className }: MobileGlassCardProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[1.45rem] border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(12,42,56,0.86),rgba(7,25,38,0.84)_58%,rgba(12,48,55,0.72))] shadow-[0_22px_62px_rgba(2,10,18,0.32)] ring-1 ring-white/[0.035]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(158,200,185,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_42%)]"
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
