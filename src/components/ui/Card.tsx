import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "group rounded-[26px] border border-white/8 bg-white/[0.045] p-6 shadow-[0_20px_80px_rgba(9,38,53,0.45)] ring-1 ring-white/[0.04] backdrop-blur transition duration-300 hover:border-cyan-300/16 hover:shadow-[0_24px_90px_rgba(27,66,66,0.45)] hover:ring-cyan-300/8 sm:p-7",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
