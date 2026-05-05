type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-[44rem] space-y-4 sm:space-y-5">
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-cyan-200">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-[2.85rem] sm:leading-[1.08]">
        {title}
      </h2>
      <p className="max-w-[40rem] text-base leading-8 text-slate-300/90 sm:text-[1.05rem] sm:leading-8">
        {description}
      </p>
    </div>
  );
}
