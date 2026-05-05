import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { homeSnapshotItems } from "@/features/home/content";

export function HomeSnapshotSection() {
  return (
    <section className="pb-24 sm:pb-28">
      <Container>
        <FadeIn>
          <Card className="h-full overflow-hidden p-0">
            <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(158,200,185,0.12),rgba(27,66,66,0.05))] px-7 py-5 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Snapshot
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-base">
                A quick view of the kind of work and technical direction I focus on most.
              </p>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2 xl:grid-cols-3">
              {homeSnapshotItems.map((item, index) => (
                <div key={item} className="bg-slate-950/70 px-7 py-6 sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-base font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
