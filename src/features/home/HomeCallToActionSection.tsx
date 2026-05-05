import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function HomeCallToActionSection() {
  return (
    <section className="flex min-h-[66svh] items-center py-8 sm:min-h-[72svh] sm:py-10">
      <Container className="w-full">
        <Card className="grid gap-6 rounded-[30px] bg-[linear-gradient(135deg,rgba(158,200,185,0.14),rgba(9,38,53,0.96))] p-7 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div className="max-w-[42rem] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Let&apos;s build
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:leading-[1.12]">
              Let&apos;s build something clean, useful, and dependable.
            </h2>
            <p className="max-w-[38rem] text-base leading-8 text-slate-300/92">
              I&apos;m open to working on websites, web apps, backend systems, APIs,
              Telegram bots, Discord bots, and practical software solutions where
              clean implementation and useful outcomes matter.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button href="/contact">Start a conversation</Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
