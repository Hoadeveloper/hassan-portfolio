import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-start justify-center gap-6 px-5 py-24 sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        That page slipped out of route range.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-slate-300">
        The page you tried to open does not exist in this portfolio. Head back to
        the homepage and continue from there.
      </p>
      <Link
        href="/"
        className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10"
      >
        Return home
      </Link>
    </div>
  );
}
