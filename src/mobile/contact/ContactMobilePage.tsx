import {
  GitBranch,
  Link,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import type { ManagedContent } from "@/types/managed-content";
import { MobilePageBackground } from "@/mobile/layout/MobilePageBackground";
import { MobileGlassCard } from "@/mobile/ui/MobileGlassCard";

type ContactMobilePageProps = {
  content: ManagedContent;
};

const contactIcons = {
  email: Mail,
  phone: Phone,
  github: GitBranch,
  linkedin: Link,
  telegram: Send,
  discord: MessageCircle,
} as const;

export function ContactMobilePage({ content }: ContactMobilePageProps) {
  return (
    <MobilePageBackground>
      <div className="mx-auto flex w-full max-w-[32rem] flex-col gap-4 px-4 pb-5 pt-2 min-[380px]:px-5">
        <p className="px-1 text-[0.78rem] font-semibold uppercase tracking-[0.28em] text-cyan-200/90">
          Contact
        </p>

        <MobileGlassCard className="overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 text-[0.82rem] text-slate-300/84">
            <MapPin className="h-4 w-4 text-cyan-200" strokeWidth={1.7} />
            <span>Location map</span>
            <span className="text-slate-500">/</span>
            <span>Remote-friendly availability</span>
          </div>
          <div className="h-[12rem] bg-slate-950/30">
            <iframe
              title="Map showing a remote-friendly contact location placeholder"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.5%2C6.3%2C9.5%2C14.5&layer=mapnik"
              className="h-full w-full border-0 grayscale-[0.15] invert-[0.9] hue-rotate-[150deg] saturate-[0.7]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </MobileGlassCard>

        <div className="grid gap-4">
          {content.site.quickContacts.map((contact) => {
            const Icon = contactIcons[contact.kind];

            return (
              <MobileGlassCard key={`${contact.kind}-${contact.href}`} className="px-3 py-2">
                <a
                  href={contact.href}
                  className="flex min-h-[3.25rem] items-center gap-2.5"
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.68rem] border border-cyan-200/14 bg-cyan-300/[0.08] text-cyan-100">
                    <Icon className="h-4 w-4" strokeWidth={1.55} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-cyan-200/84">
                      {contact.label}
                    </span>
                    <span className="mt-0.5 block truncate text-[0.78rem] leading-4 text-white">
                      {contact.value}
                    </span>
                  </span>
                </a>
              </MobileGlassCard>
            );
          })}
        </div>

      </div>
    </MobilePageBackground>
  );
}
