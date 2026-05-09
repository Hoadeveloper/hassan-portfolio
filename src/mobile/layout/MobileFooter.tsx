import Link from "next/link";

import type { ManagedContent } from "@/types/managed-content";

type MobileFooterProps = {
  content: ManagedContent;
};

export function MobileFooter({ content }: MobileFooterProps) {
  return (
    <footer className="rounded-[1.2rem] border border-cyan-200/10 bg-white/[0.025] px-4 py-4 text-slate-300/82">
      <div className="flex flex-wrap items-center gap-2">
        {content.navigation.items.map((item) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] text-slate-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <p className="mt-4 text-[0.72rem] leading-5">
        {content.navigation.footerBuiltWith}
      </p>
    </footer>
  );
}
