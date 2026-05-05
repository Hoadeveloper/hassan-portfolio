import {
  MapPin,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { QuickContactList } from "@/components/contact/QuickContactList";
import { Container } from "@/components/layout/Container";
import { ProfileSidebarCard } from "@/components/profile/ProfileSidebarCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";
import { sectionIds } from "@/lib/constants";
import type { ManagedContent } from "@/types/managed-content";

type ContactProps = {
  mode?: "section" | "page";
  managedSite?: ManagedContent["site"];
  profileImage?: string;
};

const workTypes = [
  "Backend systems",
  "Bot development",
  "API work",
  "Workflow automation",
  "Practical software solutions",
] as const;

export function Contact({ mode = "section", managedSite, profileImage }: ContactProps) {
  const isPage = mode === "page";
  const contactSite = managedSite ?? {
    ...site,
    email: site.quickContacts[0]?.value ?? "",
    phone: site.quickContacts[1]?.value ?? "",
    github: site.quickContacts[2]?.href ?? "",
    linkedin: site.quickContacts[3]?.href ?? "",
    telegram: site.quickContacts[4]?.href ?? "",
    discord: "",
    metadataBase: "https://formrouter.live",
    ctaLabel: "Let's talk",
    ctaHref: "/contact",
  };

  if (isPage) {
    return (
      <section className="pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12">
        <Container className="max-w-[1260px]">
          <div className="grid gap-5 lg:grid-cols-[232px_minmax(0,1fr)] xl:grid-cols-[244px_minmax(0,1fr)]">
            <FadeIn className="lg:pt-1">
              <ProfileSidebarCard
                name={contactSite.shortName}
                role="Full-stack Web Developer"
                availabilityText={contactSite.availability}
                quickContacts={contactSite.quickContacts}
                profileImage={profileImage}
              />
            </FadeIn>

            <FadeIn>
              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#1b4242] shadow-[0_28px_72px_rgba(9,38,53,0.36)]">
                <div className="px-7 pb-8 pt-8 sm:px-8 sm:pb-9 sm:pt-9 lg:px-10 lg:pb-10 lg:pt-10">
                  <div className="space-y-7">
                    <header className="space-y-3">
                      <h2 className="text-[2.8rem] font-semibold tracking-tight text-white sm:text-[3.1rem]">
                        Contact
                      </h2>
                      <div className="h-1.5 w-11 rounded-full bg-cyan-300" />
                      <p className="max-w-[52ch] text-[0.98rem] leading-7 text-slate-300">
                        If you are building something backend-heavy, integration-driven,
                        or automation-focused, send the context here and we can start
                        the conversation clearly.
                      </p>
                    </header>

                    <div className="overflow-hidden rounded-[26px] border border-white/8 bg-[#1b4242]">
                      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3 text-[0.82rem] text-slate-400">
                        <MapPin className="h-4 w-4 text-cyan-300" />
                        <span>Location map</span>
                        <span>&middot;</span>
                        <span>Remote-friendly availability</span>
                      </div>
                      <div className="h-[280px]">
                        <iframe
                          title="Map showing a remote-friendly contact location placeholder"
                          src="https://www.openstreetmap.org/export/embed.html?bbox=2.5%2C6.3%2C9.5%2C14.5&layer=mapnik"
                          className="h-full w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>

                    <div className="rounded-[26px] border border-white/8 bg-[#1b4242] p-5 sm:p-6">
                      <div className="space-y-2">
                        <p className="text-[0.75rem] uppercase tracking-[0.22em] text-cyan-300/85">
                          Direct contact
                        </p>
                        <h3 className="text-[1.4rem] font-semibold tracking-tight text-white">
                          Reach me directly
                        </h3>
                        <p className="max-w-[50ch] text-[0.92rem] leading-7 text-slate-300">
                          Use email, phone, GitHub, LinkedIn, or Telegram to start the
                          conversation without needing a backend contact form.
                        </p>
                      </div>

                      <div className="mt-6">
                        <QuickContactList items={contactSite.quickContacts} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id={isPage ? undefined : sectionIds.contact}
      className={isPage ? "py-16 sm:py-20 lg:py-24" : "py-24 sm:py-28"}
    >
      <Container className="space-y-10">
        {isPage ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="Contact"
              title="If you are building something practical and backend-heavy, this is the right place to start the conversation."
              description="I am open to discussing backend work, APIs, bot development, workflow automation, and software solutions where thoughtful implementation matters more than noise."
            />

            <FadeIn>
              <Card className="space-y-5 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Best conversations
                </p>
                <div className="flex flex-wrap gap-3">
                  {workTypes.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-300/95">
                  I’m especially interested in work that connects product needs with
                  reliable backend logic, integrations, and automation that teams can
                  actually depend on.
                </p>
              </Card>
            </FadeIn>
          </div>
        ) : (
          <SectionHeading
            eyebrow="Contact"
            title="Need backend help, product automation, or bot development?"
            description="If you are building something that needs reliable Python services, workflow automation, or integration-heavy backend support, this portfolio is ready to open that conversation."
          />
        )}

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn>
            <Card className="space-y-7 p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-white">How we can start</h3>
              <p className="max-w-xl text-base leading-8 text-slate-300/95">
                Share the product, the bottleneck, or the workflow that is slowing
                your team down. I can help shape the backend foundation, automation
                strategy, and implementation path from there.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {site.contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                      {detail.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{detail.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{detail.hint}</p>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="h-full space-y-6 p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-white">What you can expect</h3>
              <ul className="space-y-4 text-sm leading-7 text-slate-300/95">
                <li>Clear backend thinking grounded in product needs.</li>
                <li>Production-minded Python architecture and integrations.</li>
                <li>Fast iteration on bots, APIs, and workflow automation.</li>
              </ul>
              <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                  Best fit
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-100">
                  Founder-led products, SaaS tools, internal platforms, and teams that
                  need backend support with practical product awareness.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>

        {isPage ? (
          <FadeIn>
            <Card className="grid gap-6 p-7 sm:grid-cols-[0.95fr_1.05fr] sm:p-8">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Reaching out
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Clear context makes the conversation better from the start.
                </h3>
              </div>
              <div className="space-y-4 text-base leading-8 text-slate-300/95">
                <p>
                  If you contact me, it helps to include what you are building, where
                  the technical bottleneck sits, and the kind of support you need.
                </p>
                <p>
                  That could be backend implementation, API design, automation,
                  Telegram or Discord bot work, or practical software help around an
                  existing product or internal workflow.
                </p>
              </div>
            </Card>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
