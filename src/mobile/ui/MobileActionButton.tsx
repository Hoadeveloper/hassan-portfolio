import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type MobileActionButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function MobileActionButton({
  href,
  label,
  variant = "primary",
}: MobileActionButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-[3.6rem] items-center justify-between gap-4 rounded-[1rem] border px-4 text-[0.94rem] font-semibold transition hover:-translate-y-0.5",
        variant === "primary"
          ? "border-cyan-200/30 bg-[linear-gradient(135deg,#9ec8b9,#b9e4d4)] text-slate-950 shadow-[0_16px_36px_rgba(158,200,185,0.22)]"
          : "border-white/18 bg-white/[0.035] text-white",
      )}
    >
      {label}
      <ArrowRight className="h-5 w-5" strokeWidth={1.8} />
    </Link>
  );
}
