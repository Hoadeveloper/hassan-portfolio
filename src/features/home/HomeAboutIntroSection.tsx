import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionIds } from "@/lib/constants";

const aboutBlocks = [
  {
    title: "How I approach work",
    body:
      "I like building complete digital products, not just isolated screens or disconnected backend pieces. That means thinking carefully about the user experience, the application logic behind it, and the way everything stays maintainable over time.",
  },
  {
    title: "Where I spend most of my time",
    body:
      "A lot of my work sits at the intersection of frontend and backend development. I build interfaces that feel modern and clear, then support them with APIs, structured logic, and backend workflows that make the product dependable.",
  },
  {
    title: "Beyond the browser",
    body:
      "I also work on automation-heavy tools like Telegram bots, Discord bots, and practical software utilities. That wider range helps me design solutions that stay useful after launch instead of feeling limited to a single feature.",
  },
  {
    title: "What guides my decisions",
    body:
      "My background in ethical hacking fundamentals influences how I think about validation, behavior under edge cases, and safer implementation choices. I try to balance speed, clarity, and resilience in every build.",
  },
] as const;

export function HomeAboutIntroSection() {
  return (
    <section id={sectionIds.about} className="flex min-h-[78svh] items-center py-8 sm:min-h-[84svh] sm:py-10">
      <Container className="w-full space-y-8 sm:space-y-9">
        <SectionHeading
          eyebrow="About"
          title="A clearer picture of how I build useful digital products."
          description="I work across frontend development, backend systems, APIs, and automation with a practical product mindset. The goal is always the same: build software that feels clean to use, dependable underneath, and worth keeping long after the first release."
        />

        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:gap-6">
          {aboutBlocks.map((item) => (
            <FadeIn key={item.title}>
              <Card className="flex h-full flex-col space-y-3.5 p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  {item.title}
                </p>
                <p className="text-[0.98rem] leading-8 text-slate-300/92 sm:text-base">
                  {item.body}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
