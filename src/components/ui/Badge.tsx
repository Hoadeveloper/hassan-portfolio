import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/[0.09] px-3.5 py-1.5 text-[0.68rem] font-medium uppercase leading-none tracking-[0.2em] text-cyan-200">
      {children}
    </span>
  );
}
