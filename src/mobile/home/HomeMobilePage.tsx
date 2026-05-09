"use client";

import {
  AppWindow,
  Bot,
  Code2,
  Database,
  Globe2,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { MobileHomeHeader } from "@/mobile/home/MobileHomeHeader";
import type {
  HomeCapabilityCard,
  ManagedContent,
  StackModule,
} from "@/types/managed-content";

type HomeMobilePageProps = {
  content: ManagedContent;
};

const capabilityIcons = {
  "code-2": Code2,
  database: Database,
  "app-window": AppWindow,
  send: Send,
  bot: Bot,
  "shield-check": ShieldCheck,
} as const;

const stackIcons = {
  braces: Code2,
  database: Database,
  bot: Bot,
  globe: Globe2,
} as const;

const stackRatings: Record<StackModule["title"], number> = {
  Frontend: 5,
  Backend: 4,
  "Bots & Automation": 4,
  "Broader Technical Areas": 3,
};

const mobileCapabilityBodies: Record<string, string> = {
  "Frontend development": "Clear, responsive interfaces for real users.",
  "Backend development": "Structured app logic and reliable workflows.",
  "Software development": "Clean, useful software for practical needs.",
  "Telegram bot development": "Task automation and faster support flows.",
  "Discord bot development": "Moderation, utility, and workflow tools.",
  "Security-aware implementation": "Safer validation and smarter defaults.",
};

function SectionShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-[1.45rem] border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(12,42,56,0.86),rgba(7,25,38,0.84)_58%,rgba(12,48,55,0.72))] p-4.5 shadow-[0_22px_62px_rgba(2,10,18,0.32)] ring-1 ring-white/[0.035]",
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-cyan-200/90">
      {children}
    </p>
  );
}

function ServiceCard({ card }: { card: HomeCapabilityCard }) {
  const Icon = capabilityIcons[card.icon];
  const body = mobileCapabilityBodies[card.title] ?? card.body;

  return (
    <article className="rounded-[0.75rem] border border-cyan-200/12 bg-white/[0.035] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
      <div className="flex h-7 w-7 items-center justify-center rounded-[0.62rem] border border-cyan-200/12 bg-cyan-300/[0.08] text-cyan-100">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.55} />
      </div>
      <h3 className="mt-1.5 text-[0.68rem] font-semibold leading-3.5 text-white">
        {card.title}
      </h3>
      <p className="mt-1 line-clamp-2 text-[0.58rem] leading-3.5 text-slate-300/84">
        {body}
      </p>
    </article>
  );
}

function StackRow({ module }: { module: StackModule }) {
  const Icon = stackIcons[module.icon];
  const stackItems =
    module.title === "Frontend"
      ? [{ label: "HTML" }, { label: "CSS" }, ...module.items]
      : module.items;
  const visibleItems =
    module.title === "Broader Technical Areas"
      ? stackItems.filter((item) => item.label !== "Web Development").slice(0, 2)
      : module.title === "Frontend" || module.title === "Backend"
        ? stackItems.slice(0, 6)
        : stackItems.slice(0, 2);
  const rating = stackRatings[module.title] ?? 3;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 180);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-[0.72rem] border border-cyan-200/10 bg-white/[0.03] px-2 py-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[0.55rem] border border-cyan-200/12 bg-cyan-300/[0.08] text-cyan-100">
            <Icon className="h-3 w-3" strokeWidth={1.6} />
          </span>
          <p className="truncate text-[0.62rem] font-semibold text-white">
            {module.title}
          </p>
        </div>

        <span className="text-[0.54rem] font-semibold text-cyan-100/86">
          {rating}/5
        </span>
      </div>

      <div className="mt-1.5 grid grid-cols-5 gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className="h-1 overflow-hidden rounded-full border border-white/10 bg-slate-950/22"
          >
            <span
              className={cn(
                "block h-full origin-left rounded-full bg-[linear-gradient(90deg,#9ec8b9,#75aa99)] shadow-[0_0_12px_rgba(158,200,185,0.18)] transition-transform duration-700 ease-out",
                loaded && index < rating ? "scale-x-100" : "scale-x-0",
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            />
          </span>
        ))}
      </div>

      <div className="mt-1.5 flex min-w-0 flex-wrap gap-1">
        {visibleItems.map((item) => (
          <span
            key={item.label}
            className={cn(
              "rounded-[0.5rem] border border-white/10 bg-slate-950/18 px-1.5 py-0.5 text-[0.5rem] leading-none text-slate-200/88",
              item.emphasis && "border-cyan-200/24 bg-cyan-300/[0.08] text-white",
            )}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HomeMobilePage({ content }: HomeMobilePageProps) {
  const hero = content.home.section1;
  const work = content.home.section3;
  const stack = content.home.section4;

  return (
    <div className="min-h-screen bg-[#061724] text-slate-100">
      <main className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_4%,rgba(158,200,185,0.2),transparent_30%),radial-gradient(circle_at_15%_40%,rgba(33,73,79,0.36),transparent_36%),linear-gradient(180deg,#061724_0%,#072136_52%,#061724_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(158,200,185,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.04)_1px,transparent_1px)] [background-size:52px_52px]"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[32rem] flex-col gap-4 px-4 pb-5 pt-2 min-[380px]:px-5">
          <MobileHomeHeader hero={hero} />

          <SectionShell className="px-3 py-3.5">
            <Eyebrow>{work.eyebrow}</Eyebrow>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              {work.capabilities.map((card) => (
                <ServiceCard key={card.title} card={card} />
              ))}
            </div>
          </SectionShell>

          <SectionShell className="px-2.5 py-3">
            <Eyebrow>{stack.eyebrow}</Eyebrow>
            <div className="mt-2 grid gap-1.5">
              {stack.modules.map((module) => (
                <StackRow key={module.title} module={module} />
              ))}
            </div>
          </SectionShell>
        </div>
      </main>
    </div>
  );
}
