import {
  Bot,
  Boxes,
  Braces,
  Code2,
  Database,
  Globe,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { ManagedContent, StackModule } from "@/types/managed-content";

const iconMap = {
  braces: Braces,
  database: Database,
  bot: Bot,
  globe: Globe,
} as const;

const moduleClassNames = [
  "lg:col-start-1 lg:row-start-1 lg:self-start lg:justify-self-start",
  "lg:col-start-3 lg:row-start-1 lg:self-start lg:justify-self-end",
  "lg:col-start-1 lg:row-start-3 lg:self-end lg:justify-self-start",
  "lg:col-start-3 lg:row-start-3 lg:self-end lg:justify-self-end",
] as const;

function StackItemIcon({ label }: { label: string }) {
  switch (label) {
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.9rem] w-[0.9rem] text-white">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.14" />
          <path d="M8 16V8l8 8V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "HTML":
      return (
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.02em] text-[#9ec8b9]">
          H5
        </span>
      );
    case "CSS":
      return (
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.02em] text-[#9ec8b9]">
          C3
        </span>
      );
    case "TypeScript":
      return (
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.02em] text-[#d7ebe4]">
          TS
        </span>
      );
    case "JavaScript":
      return (
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.02em] text-[#9ec8b9]">
          JS
        </span>
      );
    case "PHP":
      return (
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.02em] text-[#d7ebe4]">
          PHP
        </span>
      );
    case "Python":
    case "python-telegram-bot":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.95rem] w-[0.95rem]">
          <path d="M12.7 3.2c-3.9 0-3.7 1.7-3.7 1.7v1.8h3.8v.6H7.5S3 6.8 3 12.1c0 5.3 4 5.1 4 5.1h2.4v-3.4s-.1-4 4-4h6.7S24 9.6 24 5.4c0-4.2-3.4-2.2-3.4-2.2z" fill="#9ec8b9" transform="scale(.78) translate(3 2.2)" />
          <circle cx="10.1" cy="6.5" r="1" fill="#0B1020" />
          <path d="M11.3 20.8c3.9 0 3.7-1.7 3.7-1.7v-1.8h-3.8v-.6h5.3s4.5.5 4.5-4.8c0-5.3-4-5.1-4-5.1h-2.4v3.4s.1 4-4 4H3.9S0 14.4 0 18.6c0 4.2 3.4 2.2 3.4 2.2z" fill="#5c8374" transform="scale(.78) translate(3 2.2)" />
          <circle cx="13.9" cy="17.5" r="1" fill="#0B1020" />
        </svg>
      );
    case "Flask":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.92rem] w-[0.92rem] text-slate-100">
          <path d="M10 3h4M11 3v6.2L6 17a2 2 0 0 0 1.7 3h8.6A2 2 0 0 0 18 17l-5-7.8V3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "FastAPI":
      return (
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.02em] text-[#9ec8b9]">
          F
        </span>
      );
    case "MySQL":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.92rem] w-[0.92rem] text-[#9ec8b9]">
          <path d="M6 16c1.2-3 3.2-5.2 6.2-6.2 1.6-.5 3.2-.4 4.8.2-.8.2-1.5.5-2.1 1 .9.1 1.8.4 2.5 1-.8.1-1.5.3-2.1.7 1 .4 1.8 1.1 2.4 2-.8-.2-1.7-.1-2.5.2-.3 1.2-1 2.1-2 2.9.1-.8 0-1.6-.4-2.3-1.8.5-3.8.7-6 .5-.3-.1-.5-.1-.8 0z" fill="currentColor" />
        </svg>
      );
    case "discord.py":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[0.92rem] w-[0.92rem]">
          <path d="M7 7.6c2.2-1.5 7.8-1.5 10 0 .8 1.4 1.3 2.9 1.5 4.5-.8 1.1-1.8 2-3 2.7l-.7-1.1c-.7.4-1.5.7-2.3.8-.2-.3-.4-.6-.5-.9.4 0 .8-.1 1.1-.3-1.4.7-3.1.7-4.5 0 .3.2.7.3 1.1.3-.2.3-.3.6-.5.9-.8-.1-1.6-.4-2.3-.8l-.7 1.1c-1.2-.7-2.2-1.6-3-2.7.2-1.6.7-3.1 1.5-4.5Z" fill="#9ec8b9" />
          <circle cx="9.6" cy="11.5" r="1" fill="#0B1020" />
          <circle cx="14.4" cy="11.5" r="1" fill="#0B1020" />
        </svg>
      );
    case "API Development":
      return <Workflow className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    case "Automation Workflows":
      return <Bot className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    case "Web Development":
      return <Globe className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    case "Software Development":
      return <Code2 className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    case "Ethical Hacking Fundamentals":
      return <ShieldCheck className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    case "Penetration Testing":
      return <ShieldCheck className="h-[0.9rem] w-[0.9rem] text-cyan-100/90" strokeWidth={1.8} />;
    default:
      return null;
  }
}

function StackModuleCard({
  title,
  icon,
  items,
  className,
}: StackModule & { className: string }) {
  const Icon = iconMap[icon];
  return (
    <div
      className={cn(
        "group relative h-full min-h-0 overflow-hidden rounded-[1.5rem] border border-cyan-200/16 bg-[linear-gradient(180deg,rgba(9,38,53,0.96),rgba(27,66,66,0.76))] px-3.5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_26px_70px_rgba(9,38,53,0.34)] transition duration-500 [transform-style:preserve-3d] sm:px-4 sm:py-4 lg:w-full lg:max-w-none lg:rounded-[1.62rem] lg:px-[clamp(0.8rem,0.72vw,0.96rem)] lg:py-[clamp(0.8rem,0.72vw,0.96rem)] lg:hover:[transform:translateY(-6px)_rotateX(5deg)_rotateY(var(--stack-tilt))]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-[0.45rem] rounded-[1.3rem] border border-white/[0.05] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0))] opacity-80 [transform:translateZ(10px)] lg:inset-[0.55rem]" />
      <div className="pointer-events-none absolute inset-x-[10%] bottom-[-10%] h-[32%] rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.18),transparent_68%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(158,200,185,0.16),transparent_34%),radial-gradient(circle_at_100%_0%,rgba(92,131,116,0.12),transparent_28%)] opacity-90" />
      <div className="pointer-events-none absolute inset-x-[8%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.58),transparent)]" />
      <div className="relative z-10 flex h-full min-h-0 flex-col [transform:translateZ(18px)]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.9rem] border border-white/12 bg-white/[0.04] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_28px_rgba(27,66,66,0.18)] [transform:translateZ(28px)] lg:h-[clamp(2.2rem,1.55vw,2.4rem)] lg:w-[clamp(2.2rem,1.55vw,2.4rem)]">
            <Icon strokeWidth={1.7} className="h-[1.375rem] w-[1.375rem]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-3">
              <p className="truncate text-[0.94rem] font-medium tracking-[-0.018em] text-white sm:text-[1rem] lg:text-[clamp(0.88rem,0.74rem+0.34vw,1rem)]">
                {title}
              </p>
              <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(158,200,185,0.3),transparent)] sm:block" />
            </div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2 lg:mt-[clamp(0.6rem,0.7vw,0.82rem)] [transform:translateZ(20px)]">
          {items.map((item) => (
            <span
              key={item.label}
              className={cn(
                "group/chip rounded-[0.82rem] border border-white/12 bg-[linear-gradient(180deg,rgba(27,66,66,0.82),rgba(9,38,53,0.82))] px-2.5 py-1.5 text-[0.74rem] font-medium tracking-[-0.015em] text-slate-100/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(9,38,53,0.24)] transition duration-300 [transform-style:preserve-3d] sm:px-3 sm:text-[0.78rem] lg:px-[clamp(0.58rem,0.62vw,0.76rem)] lg:py-[clamp(0.34rem,0.38vw,0.48rem)] lg:text-[clamp(0.64rem,0.56rem+0.14vw,0.74rem)] lg:hover:[transform:translateY(-2px)_translateZ(14px)]",
                item.emphasis &&
                  "border-cyan-300/38 bg-[linear-gradient(180deg,rgba(92,131,116,0.95),rgba(27,66,66,0.96))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_32px_rgba(92,131,116,0.32)]",
              )}
            >
              <span className="flex items-center gap-1.5 [transform:translateZ(20px)]">
                <span className="flex h-[1rem] w-[1rem] items-center justify-center rounded-[0.45rem] bg-[#092635]/40 text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_18px_rgba(9,38,53,0.24)] transition duration-300 [transform:translateZ(26px)] group-hover/chip:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_20px_rgba(92,131,116,0.18)] lg:h-[clamp(0.86rem,0.92vw,1rem)] lg:w-[clamp(0.86rem,0.92vw,1rem)]">
                  <StackItemIcon label={item.label} />
                </span>
                <span className="[transform:translateZ(24px)]">{item.label}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type HomeStackSectionProps = ManagedContent["home"]["section4"];

export function HomeStackSection({
  eyebrow,
  centerTitle,
  centerSubtitle,
  modules,
}: HomeStackSectionProps) {
  return (
    <div className="relative h-full overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,200,185,0.08),transparent_34%)]" />

      <div className="relative z-10 h-full">
        <div className="grid h-full min-h-0 gap-4 lg:grid-cols-[52px_minmax(0,1fr)] lg:gap-5">
          <div className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[5rem]">
            <span className="text-[0.82rem] font-semibold tracking-[0.06em] text-cyan-300/92">
              04
            </span>
            <span className="mt-3 h-11 w-px bg-[linear-gradient(180deg,rgba(158,200,185,0.34),rgba(255,255,255,0.06))]" />
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-cyan-200/55" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/35" />
              <span className="h-1 w-1 rounded-full bg-cyan-200/20" />
            </div>
          </div>

          <div className="grid h-full min-h-0 gap-3 lg:grid-rows-[auto_minmax(0,1fr)] lg:gap-3 lg:pr-2">
            <div className="flex items-center gap-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-cyan-200 sm:text-[0.8rem]">
                {eyebrow}
              </p>
              <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(158,200,185,0.88),rgba(255,255,255,0.08)_72%,transparent)] lg:block" />
            </div>

            <div className="relative min-h-0 overflow-hidden rounded-[1.85rem] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(9,38,53,0.98),rgba(9,38,53,0.9))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_28px_80px_rgba(9,38,53,0.4)] sm:px-5 sm:py-5 lg:[perspective:1800px] lg:px-[clamp(0.9rem,0.95vw,1.15rem)] lg:py-[clamp(0.75rem,0.82vw,0.95rem)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(158,200,185,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.05)_1px,transparent_1px)] bg-[size:78px_78px] opacity-25" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,200,185,0.12),transparent_24%),radial-gradient(circle_at_20%_78%,rgba(158,200,185,0.1),transparent_18%),radial-gradient(circle_at_80%_18%,rgba(158,200,185,0.12),transparent_16%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(158,200,185,0.56)_0.7px,transparent_0.7px)] [background-size:110px_110px]" />
              <div className="pointer-events-none absolute inset-x-[12%] top-[22%] h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.4),transparent)]" />
              <div className="pointer-events-none absolute inset-x-[18%] bottom-[20%] h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.22),transparent)]" />
              <div className="pointer-events-none absolute left-[50%] top-[12%] bottom-[12%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(158,200,185,0.22),transparent)]" />
              <div className="pointer-events-none absolute left-[18%] top-[48%] h-px w-[64%] -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.16),transparent)]" />
              <div className="pointer-events-none absolute left-1/2 top-[48%] h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.22),transparent_72%)] blur-3xl" />

              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                viewBox="0 0 1200 760"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="stack-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {[
                  "M330 170H470C505 170 532 198 532 232V308H600",
                  "M870 170H730C695 170 668 198 668 232V308H600",
                  "M330 560H470C505 560 532 532 532 506V440H600",
                  "M870 560H730C695 560 668 532 668 506V440H600",
                ].map((d, index) => (
                  <g key={d}>
                    <path d={d} stroke="rgba(158,200,185,0.18)" strokeWidth="10" filter="url(#stack-glow)" />
                    <path d={d} stroke="rgba(158,200,185,0.52)" strokeWidth="1.6" strokeLinecap="round" />
                    <circle
                      cx={600}
                      cy={index < 2 ? 308 : 440}
                      r="3.4"
                      fill="rgba(244,250,247,0.95)"
                    />
                  </g>
                ))}
                <circle cx="600" cy="368" r="5.5" fill="rgba(244,250,247,0.94)" />
                <circle cx="600" cy="368" r="24" fill="rgba(158,200,185,0.16)" />
              </svg>

              <div className="relative z-10 flex h-full min-h-0 flex-col gap-4 lg:grid lg:grid-cols-[minmax(13.5rem,1fr)_clamp(8.6rem,11vw,10.25rem)_minmax(13.5rem,1fr)] lg:grid-rows-[minmax(7.8rem,0.9fr)_clamp(6rem,7vw,7.1rem)_minmax(7.8rem,0.9fr)] lg:items-stretch lg:gap-x-[clamp(0.8rem,0.95vw,1.15rem)] lg:gap-y-[clamp(0.72rem,0.82vw,0.95rem)] lg:[transform-style:preserve-3d]">
                <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-none lg:contents">
                  {modules.map((module, index) => (
                    <StackModuleCard
                      key={module.title}
                      {...module}
                      className={cn(
                        moduleClassNames[index] ?? "",
                        index % 2 === 0
                          ? "[--stack-tilt:-5deg]"
                          : "[--stack-tilt:5deg]",
                      )}
                    />
                  ))}
                </div>

                <div className="order-1 mx-auto flex w-full max-w-[11.5rem] items-center justify-center lg:order-none lg:col-start-2 lg:row-start-2 lg:max-w-none lg:self-start">
                  <div className="relative w-full rounded-[1.6rem] border border-cyan-300/26 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.94))] px-3.5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_24px_60px_rgba(9,38,53,0.38)] transition duration-500 [transform-style:preserve-3d] lg:rounded-[1.7rem] lg:px-[clamp(0.72rem,0.78vw,0.9rem)] lg:py-[clamp(0.78rem,0.82vw,0.95rem)] lg:hover:[transform:translateY(-8px)_rotateX(8deg)]">
                    <div className="absolute inset-[0.45rem] rounded-[1.45rem] border border-cyan-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0))] [transform:translateZ(12px)]" />
                    <div className="absolute inset-[0.7rem] rounded-[1.45rem] border border-white/[0.08]" />
                    <div className="absolute inset-x-[16%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.95),transparent)]" />
                    <div className="absolute left-1/2 top-[46%] h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(158,200,185,0.32),transparent_70%)] blur-2xl" />
                    <div className="absolute inset-x-[20%] bottom-[-10%] h-[28%] rounded-full bg-[radial-gradient(circle,rgba(92,131,116,0.18),transparent_70%)] opacity-70 blur-2xl" />

                    <div className="relative z-10 flex flex-col items-center text-center [transform:translateZ(24px)]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[0.9rem] border border-cyan-200/24 bg-[linear-gradient(180deg,rgba(92,131,116,0.42),rgba(27,66,66,0.4))] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_28px_rgba(92,131,116,0.22)] [transform:translateZ(34px)] lg:h-[clamp(2.35rem,2.8vw,2.7rem)] lg:w-[clamp(2.35rem,2.8vw,2.7rem)]">
                        <Boxes strokeWidth={1.6} className="h-6 w-6 lg:h-[1.55rem] lg:w-[1.55rem]" />
                      </div>
                      <div className="mt-3 h-[2px] w-[72%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(158,200,185,0.92),transparent)]" />
                      <p className="mt-2.5 text-[1rem] font-medium tracking-[-0.02em] text-white sm:text-[1.08rem] lg:text-[clamp(0.92rem,0.82rem+0.38vw,1.12rem)]">
                        {centerTitle}
                      </p>
                      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] text-cyan-100/66 lg:text-[clamp(0.52rem,0.48rem+0.1vw,0.62rem)]">
                        {centerSubtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute left-[17%] top-[21%] h-2 w-2 rounded-full bg-cyan-100/80 shadow-[0_0_16px_rgba(158,200,185,0.85)]" />
              <div className="pointer-events-none absolute right-[16%] top-[22%] h-2 w-2 rounded-full bg-cyan-100/80 shadow-[0_0_16px_rgba(158,200,185,0.85)]" />
              <div className="pointer-events-none absolute left-[17%] bottom-[16%] h-2 w-2 rounded-full bg-cyan-100/72 shadow-[0_0_16px_rgba(158,200,185,0.72)]" />
              <div className="pointer-events-none absolute right-[16%] bottom-[16%] h-2 w-2 rounded-full bg-cyan-100/72 shadow-[0_0_16px_rgba(158,200,185,0.72)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
