import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  href?: string;
};

type LinkButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;

function classes(variant: "primary" | "secondary") {
  return cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 hover:-translate-y-0.5",
    variant === "primary"
      ? "bg-cyan-300 text-slate-950 shadow-[0_8px_24px_rgba(158,200,185,0.15)] hover:bg-cyan-200 hover:shadow-[0_12px_30px_rgba(158,200,185,0.22)]"
      : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_10px_26px_rgba(27,66,66,0.3)]",
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: LinkButtonProps | NativeButtonProps) {
  if (href) {
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (href.startsWith("#") || href.startsWith("/") || href.startsWith("mailto:")) {
      if (href.startsWith("#")) {
        return (
          <a href={href} className={cn(classes(variant), className)} {...linkProps}>
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={cn(classes(variant), className)} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={cn(classes(variant), className)}
        target="_blank"
        rel="noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cn(classes(variant), className)} {...(props as NativeButtonProps)}>
      {children}
    </button>
  );
}
