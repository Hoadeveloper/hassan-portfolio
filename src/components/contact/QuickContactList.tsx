import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import type { QuickContact } from "@/types/site";

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.05rem] w-[1.05rem]">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.45 0-.22-.01-.95-.01-1.72-2.62.57-3.17-1.11-3.17-1.11-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.43.96 1.43.96.84 1.42 2.2 1.01 2.74.77.08-.6.33-1.01.6-1.25-2.09-.23-4.28-1.03-4.28-4.61 0-1.02.37-1.86.98-2.51-.1-.24-.42-1.21.09-2.52 0 0 .8-.25 2.61.96a9.2 9.2 0 0 1 4.76 0c1.8-1.21 2.6-.96 2.6-.96.52 1.31.2 2.28.1 2.52.61.65.98 1.49.98 2.51 0 3.59-2.19 4.37-4.29 4.6.34.29.64.87.64 1.76 0 1.27-.01 2.28-.01 2.59 0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[1.05rem] w-[1.05rem]">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 10v6M12 16v-3.2c0-1.2.97-2.18 2.17-2.18 1.2 0 2.17.98 2.17 2.18V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ContactIcon({ kind }: { kind: QuickContact["kind"] }) {
  switch (kind) {
    case "email":
      return <Mail className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />;
    case "phone":
      return <Phone className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />;
    case "github":
      return <GithubMark />;
    case "linkedin":
      return <LinkedinMark />;
    case "telegram":
      return <Send className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />;
    default:
      return <MapPin className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.8} />;
  }
}

type QuickContactListProps = {
  items: QuickContact[];
  mode?: "compact" | "detailed" | "footer";
};

export function QuickContactList({
  items,
  mode = "detailed",
}: QuickContactListProps) {
  if (mode === "compact") {
    return (
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[12px] border border-white/10 bg-[#1b4242] text-cyan-300 transition hover:border-cyan-300/22 hover:text-cyan-200"
            aria-label={item.label}
          >
            <ContactIcon kind={item.kind} />
          </Link>
        ))}
      </div>
    );
  }

  if (mode === "footer") {
    return (
      <div className="flex flex-nowrap justify-center gap-1.5">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 text-[0.64rem] text-slate-300 transition hover:border-cyan-300/20 hover:text-cyan-100 sm:gap-2 sm:px-3 sm:text-[0.72rem]"
          >
            <span className="text-cyan-300">
              <ContactIcon kind={item.kind} />
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-3 rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/20"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/8 bg-[#1b4242] text-cyan-300">
            <ContactIcon kind={item.kind} />
          </div>
          <div className="min-w-0">
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-1 truncate text-[0.84rem] text-slate-200">{item.value}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
