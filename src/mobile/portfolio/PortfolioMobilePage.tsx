import { Database, Globe2, Sparkles } from "lucide-react";
import Image from "next/image";

import type { ManagedContent } from "@/types/managed-content";
import { MobilePageBackground } from "@/mobile/layout/MobilePageBackground";
import { MobileActionButton } from "@/mobile/ui/MobileActionButton";
import { MobileGlassCard } from "@/mobile/ui/MobileGlassCard";

type PortfolioMobilePageProps = {
  content: ManagedContent;
};

const projectIcons = {
  database: Database,
  sparkles: Sparkles,
  globe: Globe2,
} as const;

const projectImageKeys: Record<string, keyof ManagedContent["media"]["projectImages"]> = {
  "Developer Workflow API": "developer-workflow-api",
  "Automation Landing Site": "automation-landing-site",
};

export function PortfolioMobilePage({ content }: PortfolioMobilePageProps) {
  const { featuredProject, cards } = content.projects;
  const featuredImage = content.media.projectImages.formrouter;

  return (
    <MobilePageBackground>
      <div className="mx-auto flex w-full max-w-[32rem] flex-col gap-4 px-4 pb-5 pt-2 min-[380px]:px-5">
        <p className="px-1 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
          Projects
        </p>

        <MobileGlassCard className="px-3.5 py-3.5">
          <div className="relative aspect-[1.75] overflow-hidden rounded-[1rem] border border-cyan-200/10 bg-slate-950/24">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={featuredProject.title}
                fill
                sizes="448px"
                className="object-cover object-center"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(158,200,185,0.18),transparent_36%),linear-gradient(145deg,rgba(12,42,56,0.86),rgba(7,25,38,0.9))]">
                <Database className="h-14 w-14 text-cyan-100/80" strokeWidth={1.4} />
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,19,32,0.92))] px-3.5 pb-3 pt-9">
              <p className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-cyan-100/88">
                {featuredProject.visualEyebrow}
              </p>
              <h2 className="mt-1.5 text-[1.45rem] font-semibold leading-none tracking-[-0.035em] text-white">
                {featuredProject.title}
              </h2>
            </div>
          </div>

          <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-cyan-200/90">
            {featuredProject.category}
          </p>
          <p className="mt-2 text-[0.92rem] leading-6 text-slate-300/86">
            {featuredProject.description}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5 [&_a]:min-h-[3rem] [&_a]:rounded-[0.85rem] [&_a]:px-3 [&_a]:text-[0.8rem]">
            <MobileActionButton
              href={featuredProject.primaryButton.href}
              label={featuredProject.primaryButton.label}
            />
            <MobileActionButton
              href={featuredProject.secondaryButton.href}
              label={featuredProject.secondaryButton.label}
              variant="secondary"
            />
          </div>
        </MobileGlassCard>

        <div className="grid gap-3">
          {cards.map((project) => {
            const Icon = projectIcons[project.icon];
            const description =
              project.description || featuredProject.description;
            const imageKey = projectImageKeys[project.title];
            const projectImage = imageKey
              ? content.media.projectImages[imageKey]
              : "";

            return (
              <MobileGlassCard key={project.title} className="px-3.5 py-3.5">
                <div className="relative aspect-[2.6] overflow-hidden rounded-[0.9rem] border border-cyan-200/10 bg-slate-950/24">
                  {projectImage ? (
                    <Image
                      src={projectImage}
                      alt={project.title}
                      fill
                      sizes="448px"
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="relative flex h-full items-center justify-center overflow-hidden bg-[linear-gradient(145deg,rgba(12,42,56,0.92),rgba(7,25,38,0.9)_56%,rgba(12,48,55,0.78))]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(158,200,185,0.18),transparent_26%),linear-gradient(rgba(158,200,185,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.05)_1px,transparent_1px)] [background-size:auto,36px_36px,36px_36px]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute left-5 right-5 top-5 h-9 rounded-[0.7rem] border border-white/10 bg-white/[0.045]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute bottom-5 left-5 h-7 w-[42%] rounded-[0.65rem] border border-white/10 bg-cyan-300/[0.08]"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute bottom-5 right-5 h-7 w-[34%] rounded-[0.65rem] border border-white/10 bg-white/[0.035]"
                      />
                      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[0.85rem] border border-cyan-200/14 bg-cyan-300/[0.1] text-cyan-100 shadow-[0_14px_30px_rgba(2,10,18,0.2)]">
                        <Icon className="h-5.5 w-5.5" strokeWidth={1.45} />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(5,19,32,0.88))] px-3 pb-2.5 pt-7">
                    <p className="text-[0.52rem] font-semibold uppercase tracking-[0.22em] text-cyan-100/86">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-semibold leading-tight tracking-[-0.02em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-[0.78rem] leading-5 text-slate-300/84">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-3 [&_a]:min-h-[2.65rem] [&_a]:rounded-[0.75rem] [&_a]:px-3 [&_a]:text-[0.78rem]">
                  <MobileActionButton
                    href={project.href}
                    label={project.cta}
                    variant="secondary"
                  />
                </div>
              </MobileGlassCard>
            );
          })}
        </div>
      </div>
    </MobilePageBackground>
  );
}
