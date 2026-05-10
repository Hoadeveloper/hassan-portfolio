"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";

type ProfileSidebarCardProps = {
  name: string;
  role: string;
  availabilityText: string;
  profileImage?: string;
  className?: string;
};

export function ProfileSidebarCard({
  name,
  role,
  availabilityText,
  profileImage,
  className,
}: ProfileSidebarCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const [typedAvailability, setTypedAvailability] = useState("");

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let index = 0;
    let holdFrames = 0;
    let deleting = false;

    const intervalId = window.setInterval(() => {
      if (!deleting) {
        index += 1;
        setTypedAvailability(availabilityText.slice(0, index));

        if (index >= availabilityText.length) {
          holdFrames += 1;

          if (holdFrames >= 22) {
            deleting = true;
            holdFrames = 0;
          }
        }

        return;
      }

      index -= 1;
      setTypedAvailability(availabilityText.slice(0, Math.max(index, 0)));

      if (index <= 0) {
        deleting = false;
      }
    }, 42);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [availabilityText, prefersReducedMotion]);

  return (
    <aside
      className={`overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(27,66,66,0.96),rgba(9,38,53,0.92))] shadow-[0_24px_60px_rgba(9,38,53,0.34)] ${className ?? ""}`}
    >
      <div className="px-4 pb-4 pt-4">
        <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(27,66,66,0.78),rgba(9,38,53,0.94))]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(158,200,185,0.12),transparent_36%,transparent_72%,rgba(255,255,255,0.04))]" />
          <div className="relative aspect-[4/3.55] overflow-hidden">
            {profileImage ? (
              <>
                <Image
                  src={profileImage}
                  alt={`${name} portrait`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,30,0.08),rgba(8,15,30,0.34))]" />
              </>
            ) : (
              <>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(158,200,185,0.16),transparent_38%),linear-gradient(180deg,rgba(8,15,30,0.12),rgba(8,15,30,0.62))]" />
                <div className="absolute inset-x-[18%] top-[18%] h-[52%] rounded-t-[999px] rounded-b-[28px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
                <div className="absolute left-1/2 top-[27%] h-20 w-20 -translate-x-1/2 rounded-full border border-cyan-200/16 bg-[radial-gradient(circle,rgba(255,255,255,0.18),rgba(158,200,185,0.04))]" />
                <div className="absolute left-1/2 top-[53%] h-24 w-36 -translate-x-1/2 rounded-t-[999px] rounded-b-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(158,200,185,0.04))]" />
                <div className="absolute inset-x-[14%] bottom-[13%] flex items-center justify-center rounded-[18px] border border-white/8 bg-slate-950/24 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-200/78">
                    Portrait placeholder
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-1.5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(158,200,185,0.9)]" />
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-emerald-100/92">
              Online
            </span>
          </div>
          <h1 className="text-[1.32rem] font-medium tracking-tight text-white">{name}</h1>
          <div className="inline-flex rounded-full border border-white/10 bg-[#1b4242] px-3 py-1.5 text-[0.68rem] text-slate-100">
            {role}
          </div>
        </div>

        <div className="mt-4 rounded-[18px] border border-cyan-400/10 bg-[#1b4242] px-3.5 py-3">
          <p className="text-[0.64rem] uppercase tracking-[0.18em] text-slate-500">Status</p>
          <p className="mt-1.5 text-[0.74rem] leading-5 text-slate-200">
            {(prefersReducedMotion ? availabilityText : typedAvailability) || "\u00A0"}
            {!prefersReducedMotion ? (
              <span
                aria-hidden="true"
                className="ml-0.5 inline-block h-[0.92em] w-[2px] translate-y-[0.12em] bg-cyan-200/80 align-top"
              />
            ) : null}
          </p>
        </div>

      </div>
    </aside>
  );
}
