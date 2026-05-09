import type { ManagedContent } from "@/types/managed-content";
import type { ReactNode } from "react";
import { HomeApproachSection } from "./HomeApproachSection";
import { HomeArrivalSection } from "./HomeArrivalSection";
import { HomeCapabilitiesSection } from "./HomeCapabilitiesSection";
import { HomeStackSection } from "./HomeStackSection";

const sharedSectionContainerClass =
  "mx-auto h-full w-full max-w-[80rem] px-5 pt-4 pb-1 sm:px-8 sm:pt-6 sm:pb-2 lg:px-10";

function DesktopHomeFrame({ children, className }: { children: ReactNode; className: string }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(9,38,53,0.78),rgba(9,38,53,0.52))] shadow-[0_24px_90px_rgba(9,38,53,0.35)] ring-1 ring-white/[0.04] [backdrop-filter:blur(14px)] ${className}`}
    >
      {children}
    </div>
  );
}

function DesktopHomeScreen({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex h-[calc(100svh-var(--home-header-offset))] items-stretch justify-center overflow-hidden [contain-intrinsic-size:calc(100svh-var(--home-header-offset))] [contain:layout_paint_style] [content-visibility:auto] [scroll-snap-align:start] [scroll-snap-stop:always]">
      {children}
    </section>
  );
}

type HomeDesktopPageProps = {
  content: ManagedContent;
};

export function HomeDesktopPage({
  content,
}: HomeDesktopPageProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.12),transparent_25%),linear-gradient(180deg,#050816_0%,#070b1a_40%,#050816_100%)]" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:52px_52px] opacity-[0.08]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <main className="h-[calc(100svh-var(--home-header-offset))] overflow-y-auto overscroll-y-contain [scroll-snap-type:y_mandatory] [-webkit-overflow-scrolling:touch]">
        <DesktopHomeScreen>
          <div className={sharedSectionContainerClass}>
            <DesktopHomeFrame className="px-8 py-7 sm:px-10 sm:py-8 lg:px-14 lg:py-9">
              <HomeArrivalSection
                {...content.home.section1}
                profileImage={content.media.profileImage}
              />
            </DesktopHomeFrame>
          </div>
        </DesktopHomeScreen>

        <DesktopHomeScreen>
          <div className={sharedSectionContainerClass}>
            <DesktopHomeFrame className="px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-[3.25rem]">
              <HomeApproachSection {...content.home.section2} />
            </DesktopHomeFrame>
          </div>
        </DesktopHomeScreen>

        <DesktopHomeScreen>
          <div className={sharedSectionContainerClass}>
            <DesktopHomeFrame className="px-8 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10">
              <HomeCapabilitiesSection {...content.home.section3} />
            </DesktopHomeFrame>
          </div>
        </DesktopHomeScreen>

        <DesktopHomeScreen>
          <div className={sharedSectionContainerClass}>
            <DesktopHomeFrame className="px-8 py-7 sm:px-10 sm:py-8 lg:px-14 lg:py-8">
              <HomeStackSection {...content.home.section4} />
            </DesktopHomeFrame>
          </div>
        </DesktopHomeScreen>
      </main>

    </div>
  );
}
