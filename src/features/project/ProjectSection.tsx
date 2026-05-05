import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProject } from "@/data/projects";
import { sectionIds } from "@/lib/constants";

type ProjectProps = {
  mode?: "section" | "page";
};

const techFocus = [
  "Python backend thinking",
  "Submission routing",
  "Validation workflows",
  "Developer-friendly integrations",
] as const;

const valuePoints = [
  {
    title: "No custom backend required",
    body:
      "Developers can receive and process form submissions without spending early project time building and maintaining a dedicated backend pipeline for simple contact and lead flows.",
  },
  {
    title: "Built for practical operations",
    body:
      "FormRouter is designed for real project use, where forms often need email notifications, uploaded files, response flows, and automation beyond a basic inbox message.",
  },
  {
    title: "Developer-focused product value",
    body:
      "The product is useful because it reduces repeated setup work and lets developers focus more on product logic, UX, and integrations instead of rebuilding the same submission handling stack.",
  },
] as const;

export function Project({ mode = "section" }: ProjectProps) {
  const isPage = mode === "page";

  return (
    <section
      id={isPage ? undefined : sectionIds.project}
      className={isPage ? "pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12" : "py-24 sm:py-28"}
    >
      <Container className="space-y-10">
        {isPage ? (
          <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
            <SectionHeading
              eyebrow="Project"
              title="FormRouter is a practical form backend platform built for developers who want submissions handled cleanly without building everything from scratch."
              description="It focuses on a real developer need: receiving website form submissions, validating them, handling files, and triggering useful workflows without having to create a custom backend for every project."
            />

            <FadeIn>
              <Card className="space-y-5 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Project snapshot
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {featuredProject.name}
                </h3>
                <p className="text-base leading-8 text-slate-300/95">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {techFocus.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        ) : (
          <SectionHeading
            eyebrow="Featured project"
            title={featuredProject.name}
            description={featuredProject.summary}
          />
        )}

        <FadeIn>
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-8 px-1 sm:px-2">
              <p className="max-w-xl text-base leading-8 text-slate-300/95">
                {featuredProject.description}
              </p>

              <ul className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                {featuredProject.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 leading-6"
                  >
                    {capability}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button href={featuredProject.href} className="w-full sm:w-auto">
                  Visit live product
                </Button>
                <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                  Discuss similar work
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        {isPage ? (
          <>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <FadeIn>
                <Card className="h-full space-y-5 p-7 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Tech focus
                  </p>
                  <p className="text-base leading-8 text-slate-300/95">
                    FormRouter reflects the kind of backend product work I care about:
                    request handling, workflow logic, validation, automation, and a
                    developer experience that stays useful in real-world projects.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techFocus.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </FadeIn>

              <FadeIn>
                <Card className="h-full space-y-5 p-7 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Why it matters
                  </p>
                  <p className="text-base leading-8 text-slate-300/95">
                    The value is not just that forms can submit data, but that
                    developers get a cleaner path to useful backend behavior:
                    notifications, uploads, validation, and response flows that can
                    support actual products and operational needs.
                  </p>
                </Card>
              </FadeIn>
            </div>

            <FadeIn>
              <Card className="space-y-6 p-7 sm:p-8">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                    Real developer value
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    A backend utility product with practical value for real shipping teams.
                  </h3>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  {valuePoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-300/95">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </>
        ) : null}
      </Container>
    </section>
  );
}
