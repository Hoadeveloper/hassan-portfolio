import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CallToAction() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <FadeIn>
          <Card className="flex flex-col gap-6 rounded-[32px] bg-[linear-gradient(135deg,rgba(158,200,185,0.14),rgba(9,38,53,0.96))] p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                Let&apos;s build
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white">
                Reliable backend systems deserve a portfolio that feels just as solid.
              </h2>
            </div>
            <Button href="#contact">Start a conversation</Button>
          </Card>
        </FadeIn>
      </Container>
    </section>
  );
}
