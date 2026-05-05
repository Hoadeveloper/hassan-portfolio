import Image from "next/image";

import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollParallax } from "@/components/animations/ScrollParallax";
import { TypewriterText } from "@/components/animations/TypewriterText";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-20 md:pt-24">
      <Container className="py-4 sm:py-6">
        <div
          className="neural-field pointer-events-none absolute inset-x-0 top-8 hidden h-[420px] lg:block"
          aria-hidden="true"
        >
          <span className="neural-node left-[8%] top-[14%]" />
          <span className="neural-node neural-node-delay left-[24%] top-[52%]" />
          <span className="neural-node left-[58%] top-[18%]" />
          <span className="neural-node neural-node-slow left-[76%] top-[40%]" />
          <span className="neural-node neural-node-delay left-[88%] top-[14%]" />
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.14fr_0.86fr] lg:gap-12">
          <FadeIn className="space-y-8 sm:space-y-9">
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Premium backend engineering
              </p>
              <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                <TypewriterText
                  text={site.name}
                  speed={0.035}
                  delay={0.15}
                  className="block"
                />
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300/95 sm:text-xl sm:leading-9">
                Python, backend, and automation engineering for products that need
                cleaner workflows, dependable integrations, and services that keep
                moving under pressure.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {site.roles.map((role) => (
                <Badge key={role}>{role}</Badge>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:justify-self-end">
            <ScrollParallax distance={14}>
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(158,200,185,0.24),_transparent_60%)] blur-3xl" />
                <div className="scan-panel rounded-[32px] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_80px_rgba(9,38,53,0.55)] ring-1 ring-white/5 backdrop-blur">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/10">
                  <Image
                    src="/images/profile.jpg"
                    alt="Portrait of Hassan Olanrewaju Abdulrahman"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      Backend • Automation • Bots
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </ScrollParallax>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
