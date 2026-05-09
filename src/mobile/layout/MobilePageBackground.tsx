import type { ReactNode } from "react";

type MobilePageBackgroundProps = {
  children: ReactNode;
};

export function MobilePageBackground({ children }: MobilePageBackgroundProps) {
  return (
    <div className="relative overflow-hidden bg-[#061724] text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(158,200,185,0.18),transparent_28%),radial-gradient(circle_at_18%_42%,rgba(27,66,66,0.3),transparent_36%),linear-gradient(180deg,#061724_0%,#072032_55%,#061724_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(158,200,185,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(158,200,185,0.04)_1px,transparent_1px)] [background-size:52px_52px]"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
