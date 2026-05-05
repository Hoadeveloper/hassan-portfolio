import {
  Bot,
  Code2,
  Database,
  Globe,
  LayoutPanelLeft,
  LockKeyhole,
  ServerCog,
  Waypoints,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds } from "@/lib/constants";

const capabilities = [
  {
    title: "Frontend development",
    body:
      "Modern interfaces built to feel clean, responsive, and easy to use across real screens and real users.",
    icon: LayoutPanelLeft,
  },
  {
    title: "Backend development",
    body:
      "Application logic, structured data flow, and backend foundations that support dependable software behavior.",
    icon: ServerCog,
  },
  {
    title: "Web app development",
    body:
      "Complete website and web application builds that connect usable frontend experiences with practical backend systems.",
    icon: Globe,
  },
  {
    title: "PHP and Python development",
    body:
      "Flexible development across PHP and Python for websites, APIs, backend workflows, and software tooling.",
    icon: Code2,
  },
  {
    title: "API integration and backend logic",
    body:
      "Useful API-driven features, service connections, and backend logic that help products behave clearly and consistently.",
    icon: Waypoints,
  },
  {
    title: "Telegram and Discord bots",
    body:
      "Bot-powered tools that automate actions, improve communication flow, and connect users to useful features faster.",
    icon: Bot,
  },
  {
    title: "Data and systems thinking",
    body:
      "Practical attention to structure, workflows, and backend organization so software stays easier to maintain over time.",
    icon: Database,
  },
  {
    title: "Security-aware implementation",
    body:
      "Ethical hacking fundamentals inform how I think about validation, input handling, and building with more awareness of risk.",
    icon: LockKeyhole,
  },
] as const;

const stackItems = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  "Flask",
  "FastAPI",
  "MySQL",
  "python-telegram-bot",
  "discord.py",
  "Web Development",
  "Web Applications",
  "API Development",
  "Software Development",
  "Ethical Hacking Fundamentals",
] as const;

const snapshotItems = [
  "Frontend and backend development",
  "Websites and web applications",
  "PHP and Python development",
  "APIs and backend systems",
  "Telegram and Discord bots",
  "Ethical hacking awareness",
] as const;

export function HomeAboutSection() {
  return (
    <section id={sectionIds.about} className="py-24 sm:py-28">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="About"
          title="A practical full-stack developer focused on useful digital products."
          description="I build websites, web applications, backend systems, APIs, and automation tools with a strong focus on real-world usefulness. My work spans both frontend and backend development, using technologies like Next.js, PHP, Python, and modern web tooling to create products that are clean, responsive, and dependable."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <Card className="h-full space-y-6 p-7 sm:p-8">
              <div className="space-y-4">
                <p className="max-w-3xl text-base leading-8 text-slate-300/95 sm:text-lg">
                  I spend a lot of time on frontend development, building interfaces
                  that feel modern, smooth, and easy to use, while also making sure
                  the backend side is structured well enough to support real product needs.
                </p>
                <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                  I enjoy working across both sides of development because it allows
                  me to build complete solutions instead of disconnected pieces.
                </p>
                <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                  Beyond websites and web apps, I also build Telegram bots, Discord
                  bots, backend workflows, and practical software tools. My background
                  in ethical hacking fundamentals also shapes how I think about validation,
                  system behavior, and more secure development practices.
                </p>
              </div>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="h-full space-y-6 p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Building stronger products through frontend quality, backend structure,
                and practical software thinking.
              </p>
              <p className="text-base leading-8 text-slate-300/95">
                I care about building software that is not only functional, but also
                clean, usable, maintainable, and dependable. That means paying attention
                to both the interface people interact with and the systems running underneath it.
              </p>
              <p className="text-base leading-8 text-slate-300/95">
                My goal is to keep growing as a developer by building better frontend
                experiences, stronger backend systems, more useful automation, and software
                that solves real problems in a practical way.
              </p>
            </Card>
          </FadeIn>
        </div>

        <FadeIn>
          <Card className="space-y-7 p-7 sm:p-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                What I do
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                The kind of development work I focus on most.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300/95">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn>
            <Card className="h-full space-y-6 p-7 sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Core technologies / stack
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  The tools and technical areas I work with most naturally.
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {stackItems.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="h-full overflow-hidden p-0">
              <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(158,200,185,0.12),rgba(27,66,66,0.05))] px-7 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Snapshot
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-base">
                  A quick view of the kind of work and technical direction I focus on most.
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                {snapshotItems.map((item, index) => (
                  <div key={item} className="bg-slate-950/70 px-7 py-6 sm:px-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-base font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
