import type { ReactNode } from "react";

export function AdminCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[24px] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
      <div className="space-y-1.5">
        <h2 className="text-[1.1rem] font-semibold text-white">{title}</h2>
        {description ? (
          <p className="max-w-[72ch] text-sm leading-7 text-slate-300/82">{description}</p>
        ) : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function AdminField({
  label,
  name,
  defaultValue,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
      />
    </label>
  );
}

export function AdminTextarea({
  label,
  name,
  defaultValue,
  rows = 4,
  placeholder,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <textarea
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-slate-500"
      />
    </label>
  );
}

export function AdminSelect({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm text-white outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export function AdminNotice({
  saved,
  message,
}: {
  saved?: boolean;
  message?: string;
}) {
  if (!saved && !message) {
    return null;
  }

  return (
    <div
      className={`rounded-[16px] border px-4 py-3 text-sm ${
        saved
          ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-100"
          : "border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-100"
      }`}
    >
      {message ?? "Saved successfully."}
    </div>
  );
}
