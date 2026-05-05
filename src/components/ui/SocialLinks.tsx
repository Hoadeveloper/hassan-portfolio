import { site } from "@/data/site";

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3 text-sm text-slate-300">
      {site.contactActions.map((action) => (
        <li key={action.label}>
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/40 hover:text-white"
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
          >
            {action.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
