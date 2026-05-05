import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";

export function HomeMindsetSection() {
  return (
    <section className="flex min-h-[72svh] items-center py-8 sm:min-h-[78svh] sm:py-10">
      <Container className="w-full">
        <FadeIn>
          <Card className="grid gap-6 p-6 sm:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] sm:items-start sm:gap-10 sm:p-7">
            <div className="max-w-xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Engineering mindset
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-[2rem] sm:leading-[1.2]">
                Building stronger digital products through frontend quality, backend
                structure, and practical software thinking.
              </h2>
            </div>
            <div className="max-w-[36rem] space-y-4 text-[0.98rem] leading-7 text-slate-300/92 sm:justify-self-end sm:pt-0.5">
              <p>
                I care about building software that is not only functional, but also
                clean, usable, maintainable, and dependable. That means paying attention
                to both the interface people interact with and the systems running underneath it.
              </p>
              <p>
                My goal is to keep growing as a developer by building better frontend
                experiences, stronger backend systems, more useful automation, and software
                that solves real problems in a practical way.
              </p>
            </div>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
