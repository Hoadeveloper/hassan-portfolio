import { FadeIn } from "@/components/animations/FadeIn";
import { Stagger } from "@/components/animations/Stagger";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/data/skills";
import { sectionIds } from "@/lib/constants";

type SkillsProps = {
  mode?: "section" | "page";
};

const skillGroups = [
  {
    title: "Languages",
    items: ["Python"],
    description:
      "Python is the core language behind most of my backend, automation, and bot development work.",
  },
  {
    title: "Backend",
    items: ["Flask", "FastAPI", "Web development", "Software development"],
    description:
      "I use lightweight and modern backend tools to build APIs, service logic, and practical application flows.",
  },
  {
    title: "Bot Development",
    items: ["python-telegram-bot", "discord.py"],
    description:
      "I build bot-driven experiences that automate repetitive tasks and connect users to useful actions quickly.",
  },
  {
    title: "Database",
    items: ["MySQL"],
    description:
      "I work with relational data models and backend persistence patterns that keep application logic structured.",
  },
  {
    title: "Security / Other",
    items: ["Ethical hacking fundamentals"],
    description:
      "My security interest helps me think more carefully about validation, safer defaults, and system behavior.",
  },
] as const;

export function Skills({ mode = "section" }: SkillsProps) {
  const isPage = mode === "page";

  return (
    <section
      id={isPage ? undefined : sectionIds.skills}
      className={isPage ? "pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12" : "py-24 sm:py-28"}
    >
      <Container className="space-y-10">
        {isPage ? (
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <SectionHeading
              eyebrow="Skills"
              title="A practical backend-focused skill set built around APIs, automation, bots, and reliable software work."
              description="My skills are strongest where backend development meets real product needs: service logic, API work, bot development, and software solutions that help teams move faster and work more clearly."
            />

            <FadeIn>
              <Card className="space-y-5 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  How I use them
                </p>
                <p className="text-base leading-8 text-slate-300/95">
                  I use these tools to build websites, backend systems, APIs, Telegram
                  bots, Discord bots, and practical software solutions that focus on
                  useful outcomes rather than unnecessary complexity.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge>Backend-first</Badge>
                  <Badge>Automation-aware</Badge>
                  <Badge>Product-minded</Badge>
                </div>
              </Card>
            </FadeIn>
          </div>
        ) : (
          <SectionHeading
            eyebrow="Skills"
            title="Tools and foundations I lean on to deliver dependable products."
            description="The stack centers on Python backend work, integration-heavy product builds, and the practical tooling needed to keep services stable in production."
          />
        )}

        {isPage ? (
          <div className="grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <FadeIn key={group.title}>
                <Card className="h-full space-y-5 p-7 sm:p-8">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      {group.title}
                    </p>
                    <p className="text-sm leading-7 text-slate-300/95">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        ) : (
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <FadeIn key={skill}>
                <Card className="flex h-full items-center justify-between gap-4 p-5 sm:p-6">
                  <span className="text-sm font-medium leading-6 text-white sm:text-base">
                    {skill}
                  </span>
                  <Badge>Core</Badge>
                </Card>
              </FadeIn>
            ))}
          </Stagger>
        )}

        {isPage ? (
          <FadeIn>
            <Card className="grid gap-6 p-7 sm:grid-cols-[0.9fr_1.1fr] sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  In practice
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  I use these skills to build solutions that are useful, maintainable, and grounded in real development work.
                </h3>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-300/95">
                My approach is hands-on and product-aware. I am interested in tools
                and frameworks not just for learning them, but for what they help me
                ship: clearer APIs, better backend workflows, smarter automation,
                maintainable bot systems, and software that solves practical problems
                without unnecessary noise.
              </p>
            </Card>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
