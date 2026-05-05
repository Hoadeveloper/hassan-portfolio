import Image from "next/image";
import {
  Bot,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  MapPin,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { site } from "@/data/site";
import { sectionIds } from "@/lib/constants";

type AboutProps = {
  mode?: "section" | "page";
};

const supportCards = [
  {
    title: "Backend-first mindset",
    body:
      "I like thinking from the service layer outward: how data flows, how APIs behave, and how systems stay predictable as features grow.",
  },
  {
    title: "Bots and automation",
    body:
      "I build Telegram and Discord bot experiences that reduce manual work, improve responsiveness, and connect users to useful actions.",
  },
  {
    title: "Security-aware approach",
    body:
      "My interest in ethical hacking fundamentals shapes how I think about validation, safer defaults, and building with more awareness of risk.",
  },
] as const;

const serviceCards = [
  {
    title: "Backend Development",
    body:
      "I build service logic and backend foundations that keep application behavior structured, readable, and easier to extend over time.",
    icon: Database,
  },
  {
    title: "API Development",
    body:
      "I work with API patterns that help products move data clearly, integrate well, and support practical application workflows.",
    icon: Code2,
  },
  {
    title: "Bot Development",
    body:
      "I create Telegram and Discord bot tools that automate actions, improve response time, and connect users to useful features.",
    icon: Bot,
  },
  {
    title: "Practical Software Solutions",
    body:
      "I like building useful software that solves real operational or product needs, not just surface-level interface work.",
    icon: Boxes,
  },
] as const;

const toolHighlights = [
  { label: "Python", icon: TerminalSquare },
  { label: "Flask", icon: Globe },
  { label: "FastAPI", icon: Sparkles },
  { label: "MySQL", icon: Database },
  { label: "Bot tooling", icon: Bot },
  { label: "Security-aware", icon: ShieldCheck },
] as const;

const aboutStats = [
  {
    value: "01",
    label: "Featured platform",
    detail: "FormRouter is the current production-facing product anchor.",
  },
  {
    value: "04",
    label: "Primary roles",
    detail: "Python, backend, Telegram bots, and Discord bot development.",
  },
  {
    value: "06",
    label: "Core focus areas",
    detail: "APIs, automation, data handling, bots, web apps, and software systems.",
  },
  {
    value: "03",
    label: "Product priorities",
    detail: "Dependable workflows, clean integrations, and maintainable backend logic.",
  },
] as const;

export function About({ mode = "section" }: AboutProps) {
  const focusAreas = skills.slice(0, 6);
  const isPage = mode === "page";

  if (isPage) {
    return (
      <section className="pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[340px_minmax(0,1fr)]">
            <FadeIn>
              <Card className="sticky top-24 space-y-6 p-6 sm:p-7">
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(158,200,185,0.18),_transparent_58%)]" />
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/profile.jpg"
                      alt="Portrait of Hassan Olanrewaju Abdulrahman"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1280px) 320px, (min-width: 768px) 40vw, 100vw"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
                      Profile
                    </p>
                    <h1 className="text-2xl font-semibold tracking-tight text-white">
                      {site.name}
                    </h1>
                    <p className="text-sm leading-7 text-slate-300/95">
                      Growing backend developer focused on Python, APIs, automation,
                      and bot-driven software solutions.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {site.roles.map((role) => (
                      <Badge key={role}>{role}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Location
                      </p>
                      <p className="mt-1 text-sm text-slate-100">{site.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Availability
                      </p>
                      <p className="mt-1 text-sm text-slate-100">{site.availability}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                      <Wrench className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Contact highlights
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {site.contactActions.map((action) => (
                          <Badge key={action.label}>{action.label}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn>
                <Card className="space-y-8 p-7 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                      About Me
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      What I Do
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Tools
                    </span>
                  </div>

                  <div className="space-y-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
                      About
                    </p>
                    <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      Building backend systems with a practical mindset and a clear focus on useful software.
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-slate-300/95 sm:text-lg">
                      I am Hassan Olanrewaju Abdulrahman, a growing Python and backend
                      developer working across APIs, automation, web development, and
                      bot systems. I care about building software that feels dependable,
                      readable, and grounded in actual product needs.
                    </p>
                    <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                      My experience is still developing, but it is already shaped by
                      real implementation interests: Flask, FastAPI, MySQL, Telegram
                      and Discord bot development, and the kind of backend thinking
                      that helps software behave clearly under real-world use.
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {serviceCards.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                        >
                          <div className="mb-4 inline-flex rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-3 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300/95">
                            {item.body}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="space-y-6 p-7 sm:p-8 lg:p-10">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
                      Skills / Tools
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      A stack centered on Python, backend logic, bots, and practical software delivery.
                    </h3>
                    <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                      These are the tools and foundations I lean on most often when I
                      build APIs, backend flows, automation features, and software that
                      solves operational problems in a clean way.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {toolHighlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/5 px-5 py-4"
                        >
                          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-cyan-200">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {focusAreas.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="grid gap-6 p-7 sm:grid-cols-[0.9fr_1.1fr] sm:p-8 lg:p-10">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
                      Professional direction
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      Growing through real projects, stronger backend thinking, and steady technical depth.
                    </h3>
                  </div>
                  <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                    I want my work to keep moving toward stronger backend engineering,
                    better software judgment, and more useful systems. That means
                    building more dependable APIs, cleaner automation, better bot
                    tools, and software that feels practical, maintainable, and worth
                    using in real workflows.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={sectionIds.about}
      className="py-24 sm:py-28"
    >
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="About"
          title="A growing backend developer with a practical engineering mindset."
          description="I am building my path in backend engineering through Python, API development, automation, and bot systems, with a focus on solving real workflow problems in a clean and dependable way."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn>
            <Card className="h-full space-y-7 p-7 sm:p-8">
              <div className="space-y-4">
                <p className="max-w-2xl text-lg leading-9 text-slate-100">
                  I work with Python to build backend logic, automation flows, and
                  integration-driven tools that make products more useful and easier
                  to operate.
                </p>
                <p className="max-w-2xl text-base leading-8 text-slate-300/95">
                  My current experience is grounded in Flask, FastAPI, MySQL, bot
                  development, and general web/software development. I am still
                  growing, but I already care deeply about readable code, dependable
                  behavior, and building systems that solve practical problems rather
                  than just looking impressive on paper.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Focus areas
                </p>
                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>

              <p className="max-w-xl text-sm leading-7 text-slate-400">
                I am especially interested in backend systems that connect product
                logic, automation, and communication workflows in a way that feels
                stable, scalable, and easy to maintain.
              </p>
            </Card>
          </FadeIn>

          <FadeIn>
            <div className="grid gap-4">
              {supportCards.map((item) => (
                <Card key={item.title} className="space-y-4 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300/95">{item.body}</p>
                </Card>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-2">
            <Card className="overflow-hidden p-0">
              <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(158,200,185,0.12),rgba(27,66,66,0.05))] px-7 py-5 sm:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Practical snapshot
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base">
                  A compact view of the work I am leaning into most: useful backend
                  systems, automation-led tooling, and product-minded engineering that
                  stays grounded in real implementation.
                </p>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {aboutStats.map((item) => (
                  <div key={item.label} className="bg-slate-950/70 px-7 py-6 sm:px-8">
                    <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                      {item.label}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-slate-400">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          <FadeIn className="lg:col-span-2">
            <Card className="grid gap-6 p-7 sm:grid-cols-[0.9fr_1.1fr] sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Professional direction
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Building depth through real products, real tools, and real backend work.
                </h3>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                I want my work to reflect steady growth, strong technical fundamentals,
                and useful outcomes. That means writing cleaner backend code, building
                more reliable automation, improving how APIs and bots behave in
                production, and sharpening the engineering judgment that turns simple
                tools into trustworthy systems.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
