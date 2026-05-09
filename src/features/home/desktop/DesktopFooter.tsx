import { Mail, Phone, Send } from "lucide-react";
import Link from "next/link";
import type { ManagedContent, QuickContact } from "@/types/managed-content";

function ContactPill({ item }: { item: QuickContact }) {
  const Icon = item.kind === "phone" ? Phone : item.kind === "telegram" ? Send : Mail;

  return (
    <Link
      href={item.href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] text-slate-300 transition hover:border-cyan-300/20 hover:text-cyan-100"
    >
      <Icon className="h-4 w-4 text-cyan-300" strokeWidth={1.8} />
      <span>{item.label}</span>
    </Link>
  );
}

type DesktopFooterProps = {
  site: ManagedContent["site"];
  navigation: ManagedContent["navigation"];
};

export function DesktopFooter({ site, navigation }: DesktopFooterProps) {
  return (
    <footer className="border-t border-white/8 bg-slate-950/40 py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-10 text-sm text-slate-400 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] sm:items-end">
        <div className="max-w-2xl space-y-2.5">
          <p className="text-sm font-medium tracking-[0.03em] text-slate-200">
            {site.name}
          </p>
          <p className="max-w-xl text-sm leading-7 text-slate-400/95">
            {navigation.footerIntro}
          </p>
        </div>
        <div className="max-w-md space-y-2.5 text-right sm:justify-self-end">
          <p className="leading-6 text-slate-300">{site.availability}</p>
          <p className="leading-6 text-slate-500">{navigation.footerBuiltWith}</p>
          <div className="flex flex-wrap justify-end gap-2.5">
            {site.quickContacts.slice(0, 4).map((item) => (
              <ContactPill key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
