import { TypewriterText } from "@/components/animations/TypewriterText";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { HomeHeroScrollScene } from "@/features/home/HomeHeroScrollScene";

const summaryItems = [
  {
    label: "Core focus",
    value: "Frontend, backend, and automation",
  },
  {
    label: "Main tools",
    value: "Next.js, PHP, Python, and modern web tooling",
  },
  {
    label: "Build output",
    value: "Websites, web apps, APIs, workflows, and bots",
  },
] as const;

export function HomeHeroSection() {
  return (
    <section id="home" className="relative flex min-h-[82svh] items-center overflow-hidden pt-4 sm:min-h-[84svh] sm:pt-5 md:pt-6">
      <Container className="w-full py-4 sm:py-6">
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

        <HomeHeroScrollScene
          left={
            <>
              <div className="max-w-[50rem] space-y-4 sm:space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Full-Stack Web Development
                </p>
                <h1 className="max-w-[46rem] text-balance text-[2.35rem] font-semibold tracking-tight text-white sm:text-[2.7rem] lg:text-[3.08rem] lg:leading-[1.03] xl:text-[3.42rem]">
                  <TypewriterText
                    text={site.name}
                    speed={0.035}
                    delay={0.15}
                    className="block"
                  />
                </h1>
                <p className="max-w-[42rem] text-pretty text-[1.02rem] leading-8 text-slate-300/90 sm:text-[1.2rem] sm:leading-[1.8]">
                  Frontend, backend, and automation-focused developer building modern
                  websites, web apps, APIs, and bot-powered solutions. I create digital
                  products that are clean in presentation, dependable in structure, and
                  built to stay useful beyond the first release.
                </p>
              </div>

              <div className="flex max-w-[43rem] flex-wrap gap-2.5 sm:gap-3">
                {site.roles.map((role) => (
                  <Badge key={role}>{role}</Badge>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button href="/contact" className="w-full sm:w-auto">
                  Start a conversation
                </Button>
                <Button href="/resume" variant="secondary" className="w-full sm:w-auto">
                  View resume
                </Button>
              </div>
            </>
          }
          right={
            <div className="relative mx-auto w-full max-w-[276px] sm:max-w-[304px] xl:mx-0 xl:ml-auto xl:translate-x-[1rem] xl:max-w-[308px]">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(158,200,185,0.24),_transparent_60%)] blur-3xl" />
              <div className="scan-panel rounded-[24px] border border-white/8 bg-white/[0.045] p-3 shadow-[0_30px_80px_rgba(9,38,53,0.55)] ring-1 ring-white/[0.04] backdrop-blur">
                <div className="flex min-h-[29rem] flex-col rounded-[18px] border border-white/8 bg-[linear-gradient(160deg,rgba(8,15,28,0.94),rgba(17,31,49,0.88))] p-4">
                  <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-4">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                        Quick summary
                      </p>
                      <h2 className="mt-1 text-[1rem] font-semibold tracking-tight text-white sm:text-[1.08rem]">
                        Full-stack developer
                      </h2>
                    </div>
                    <div className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                      Active
                    </div>
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {summaryItems.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[16px] border border-white/8 bg-white/[0.045] px-3.5 py-3"
                      >
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-[0.9rem] font-medium leading-6 text-white/92">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-[16px] border border-cyan-300/14 bg-cyan-300/[0.08] px-3.5 py-3.5">
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      Security awareness
                    </p>
                    <p className="mt-2 text-[0.83rem] leading-6 text-slate-100/92">
                      Ethical hacking fundamentals shape how I think about validation,
                      system behavior, and safer software decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Container>
    </section>
  );
}
