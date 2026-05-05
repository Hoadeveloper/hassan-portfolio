"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { homeCapabilities, homeStackItems } from "@/features/home/content";
import { sectionIds } from "@/lib/constants";

const aboutBlocks = [
  {
    title: "How I approach work",
    body:
      "I build complete products, not isolated pieces. That means thinking about the interface, the logic underneath it, and how everything stays useful after launch.",
  },
  {
    title: "Where I spend most of my time",
    body:
      "Most of my work lives between frontend and backend development, where clean interfaces and dependable systems need to support each other.",
  },
  {
    title: "Beyond the browser",
    body:
      "I also work on automation-heavy tools like Telegram bots, Discord bots, and practical utilities that solve real workflow problems.",
  },
  {
    title: "What guides my decisions",
    body:
      "Security awareness shapes how I think about validation, edge cases, system behavior, and building software with more resilience.",
  },
] as const;

const mindsetPoints = [
  "I care about software that is not only functional, but also clear, maintainable, and dependable in everyday use.",
  "That means treating interface quality and backend structure as part of the same product decision, not separate concerns.",
  "My goal is to keep building stronger frontend experiences, backend systems, and automation tools that solve practical problems well.",
] as const;

type ScreenIntroProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

function ScreenIntro({ index, eyebrow, title, description }: ScreenIntroProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[112px_minmax(0,1fr)] lg:items-start lg:gap-8">
      <div className="hidden pt-2 lg:flex lg:items-center lg:gap-4">
        <span className="min-w-[2rem] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
          {index}
        </span>
        <span className="h-px flex-1 bg-cyan-200/20" />
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
          {eyebrow}
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-[2.9rem] sm:leading-[1.06]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[42rem] text-base leading-8 text-slate-300/90 sm:text-[1.05rem]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function HomePageExperience() {
  useEffect(() => {
    const element = document.documentElement;
    element.setAttribute("data-home-screens", "true");

    return () => element.removeAttribute("data-home-screens");
  }, []);

  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="home-screen-shell relative">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,38,53,0.1),rgba(9,38,53,0.55))]" />
        <div className="absolute left-1/2 top-[10vh] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
        <div className="absolute left-1/2 top-[18vh] h-[58rem] w-[58rem] -translate-x-1/2 rounded-full border border-cyan-300/10" />
        <div className="absolute left-[6%] top-[14vh] h-[24rem] w-[20rem] bg-[radial-gradient(circle,rgba(158,200,185,0.12),transparent_72%)] blur-3xl" />
        <div className="absolute right-[4%] top-[26vh] h-[24rem] w-[20rem] bg-[radial-gradient(circle,rgba(92,131,116,0.12),transparent_72%)] blur-3xl" />
      </div>

      <section
        id="home"
        className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]"
      >
        <Container className="w-full max-w-[68rem]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(3,11,26,0.84),rgba(4,19,39,0.56))] px-4 py-4.5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-5 sm:py-6 lg:px-7 lg:py-7"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,200,185,0.1),transparent_38%)]"
            />
            <div className="relative z-10" />
          </motion.div>
        </Container>
      </section>

      <section
        id={sectionIds.about}
        className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]"
      >
        <Container className="w-full max-w-[68rem]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.78),rgba(9,38,53,0.52))] px-4 py-4.5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-5 sm:py-6 lg:px-7 lg:py-7"
          >
            <div className="relative z-10 grid gap-8 xl:grid-cols-[minmax(0,1.22fr)_300px] xl:items-center xl:gap-10">
              <div className="space-y-6">
                <ScreenIntro
                  index="02"
                  eyebrow="About"
                  title="A clearer picture of how I build useful digital products."
                  description="I work across frontend development, backend systems, APIs, and automation with a practical product mindset. The goal is always the same: build software that feels clean to use, dependable underneath, and worth keeping long after the first release."
                />

                <div className="grid gap-3 md:grid-cols-2">
                  {aboutBlocks.slice(0, 2).map((item) => (
                    <Card key={item.title} className="flex h-full flex-col justify-between p-4">
                      <div className="space-y-2.5">
                        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          {item.title}
                        </p>
                        <p className="text-[0.92rem] leading-6 text-slate-300/92">
                          {item.body}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="relative mx-auto w-full max-w-[260px] p-3.5">
                <div className="space-y-3">
                  {aboutBlocks.slice(2).map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3"
                    >
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300/92">{item.body}</p>
                    </div>
                  ))}

                  <div className="rounded-[18px] border border-cyan-300/14 bg-cyan-300/[0.08] px-4 py-3">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      Product mindset
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100/92">
                      I aim for software that feels clean to use, dependable underneath,
                      and worth keeping long after the first release.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]">
        <Container className="w-full max-w-[68rem]">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.78),rgba(9,38,53,0.52))] px-4 py-4.5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-5 sm:py-6 lg:px-7 lg:py-7"
          >
            <div className="relative z-10 space-y-7">
              <ScreenIntro
                index="03"
                eyebrow="What I Do"
                title="The kind of development work I focus on most."
              />

              <div className="grid auto-rows-fr gap-3.5 md:grid-cols-2 xl:grid-cols-4">
                {homeCapabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Card key={item.title} className="flex h-full flex-col p-[1.125rem] sm:p-5">
                      <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/14 bg-cyan-300/10 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="max-w-[15rem] text-[1.02rem] font-semibold leading-6 text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300/90">
                        {item.body}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]">
        <Container className="w-full max-w-5xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.78),rgba(9,38,53,0.52))] px-4 py-5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-6 sm:py-7 lg:px-8 lg:py-8"
          >
            <div className="relative z-10 grid gap-8 lg:grid-cols-[112px_minmax(0,1fr)] lg:gap-8">
              <div className="hidden pt-2 lg:flex lg:items-center lg:gap-4">
                <span className="min-w-[2rem] text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-cyan-200/60">
                  04
                </span>
                <span className="h-px flex-1 bg-cyan-200/20" />
              </div>

              <div className="grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
                <div className="space-y-3.5">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Core Technologies / Stack
                  </p>
                  <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.08]">
                    The tools and technical areas I work with most naturally.
                  </h2>
                </div>

                <Card className="p-5 sm:p-6">
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {homeStackItems.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]">
        <Container className="w-full max-w-5xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.78),rgba(9,38,53,0.52))] px-4 py-5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-6 sm:py-7 lg:px-8 lg:py-8"
          >
            <div className="relative z-10 space-y-7">
              <ScreenIntro
                index="05"
                eyebrow="Engineering Mindset"
                title="Building stronger digital products through frontend quality, backend structure, and practical software thinking."
              />

              <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-8">
                <Card className="p-5 sm:p-6">
                  <p className="text-base leading-8 text-slate-300/92">
                    I care about building software that is not only functional, but
                    also clean, usable, maintainable, and dependable. That means
                    paying attention to both the interface people interact with and
                    the systems running underneath it.
                  </p>
                </Card>

                <div className="space-y-4">
                  {mindsetPoints.slice(1).map((point) => (
                    <Card key={point} className="p-5 sm:p-6">
                      <p className="text-[0.98rem] leading-7 text-slate-300/92">{point}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section
        id={sectionIds.contact}
        className="home-screen-panel relative flex items-center py-16 sm:py-[4.5rem]"
      >
        <Container className="w-full max-w-5xl">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.55, ease: "easeOut" }}
            className="home-screen-frame relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(9,38,53,0.92),rgba(27,66,66,0.84))] px-4 py-5 shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] sm:px-6 sm:py-7 lg:px-8 lg:py-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(158,200,185,0.14),transparent_32%)]"
            />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-8">
              <div className="space-y-3.5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Let&apos;s build
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-[2.8rem] sm:leading-[1.08]">
                  Let&apos;s build something clean, useful, and dependable.
                </h2>
                <p className="max-w-[42rem] text-base leading-8 text-slate-300/92 sm:text-[1.05rem]">
                  I&apos;m open to working on websites, web apps, backend systems,
                  APIs, Telegram bots, Discord bots, and practical software
                  solutions where clean implementation and useful outcomes matter.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="/contact">Start a conversation</Button>
                <Button href="/resume" variant="secondary">
                  View resume
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
