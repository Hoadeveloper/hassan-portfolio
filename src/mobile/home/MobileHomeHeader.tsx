import Image from "next/image";

import type { ManagedContent } from "@/types/managed-content";

type MobileHomeHeaderProps = {
  hero: ManagedContent["home"]["section1"];
};

export function MobileHomeHeader({ hero }: MobileHomeHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.55rem] border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(8,34,51,0.88),rgba(5,19,32,0.8)_52%,rgba(12,50,58,0.74))] px-5 pb-4 pt-2.5 shadow-[0_26px_80px_rgba(3,12,22,0.36)] ring-1 ring-white/[0.035]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(158,200,185,0.2),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-3.2rem] top-[5.1rem] h-[15rem] w-[16rem] rounded-[4rem] border border-cyan-200/20 [transform:rotate(-39deg)]"
      />
      <div className="relative z-10 grid grid-cols-[minmax(0,1fr)_5.8rem] items-start gap-3">
        <div className="min-w-0">
          <h1 className="text-[1.04rem] font-semibold leading-[1.12] tracking-[-0.015em] text-white">
            Full-Stack{" "}
            <span className="bg-[linear-gradient(135deg,#bde5d6,#75aa99)] bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="mt-2.5 max-w-[15.75rem] text-[0.72rem] leading-[1.16rem] text-slate-200/86">
            I build modern websites, web apps, APIs, bots, and practical
            software solutions with a focus on clean implementation, dependable
            structure, and real-world usefulness.
          </p>
        </div>

        <div className="rounded-[0.9rem] border border-cyan-200/14 bg-[linear-gradient(145deg,rgba(61,91,99,0.42),rgba(35,70,78,0.3))] px-1.5 py-2 shadow-[0_14px_34px_rgba(3,12,22,0.24)] ring-1 ring-white/[0.03]">
          <div className="relative mx-auto h-[4.85rem] w-full overflow-hidden rounded-[0.75rem] border border-cyan-200/10 bg-[#061724]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(158,200,185,0.16),transparent_54%)]"
            />
            <Image
              src="/images/hoadev-cutout-dark.png"
              alt={`${hero.name} portrait`}
              fill
              sizes="108px"
              className="object-contain object-bottom"
              priority
            />
          </div>

          <div className="mx-auto mt-1.5 flex w-fit items-center gap-1.5 rounded-full border border-cyan-200/12 bg-cyan-300/[0.07] px-2 py-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(158,200,185,0.8)]" />
            </span>
            <span className="text-[0.46rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
              Online
            </span>
          </div>

          <h2 className="mt-1.5 truncate text-center text-[0.62rem] font-semibold leading-tight text-white">
            {hero.name}
          </h2>
          <p className="mt-1 truncate text-center text-[0.52rem] leading-3 text-cyan-100/72">
            Full-stack developer
          </p>
        </div>
      </div>
    </section>
  );
}
