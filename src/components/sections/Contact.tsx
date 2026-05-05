import { Mail, Send, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/animations/FadeIn";

function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.47.09.64-.2.64-.45 0-.22-.01-.95-.01-1.72-2.62.57-3.17-1.11-3.17-1.11-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.43.96 1.43.96.84 1.42 2.2 1.01 2.74.77.08-.6.33-1.01.6-1.25-2.09-.23-4.28-1.03-4.28-4.61 0-1.02.37-1.86.98-2.51-.1-.24-.42-1.21.09-2.52 0 0 .8-.25 2.61.96a9.2 9.2 0 0 1 4.76 0c1.8-1.21 2.6-.96 2.6-.96.52 1.31.2 2.28.1 2.52.61.65.98 1.49.98 2.51 0 3.59-2.19 4.37-4.29 4.6.34.29.64.87.64 1.76 0 1.27-.01 2.28-.01 2.59 0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 10v6M12 16v-3.2c0-1.2.97-2.18 2.17-2.18 1.2 0 2.17.98 2.17 2.18V16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

const contactItems = [
  {
    label: "Email",
    value: site.quickContacts.find((item) => item.kind === "email")?.value ?? "",
    href: site.quickContacts.find((item) => item.kind === "email")?.href ?? "#",
    icon: Mail
  },
  {
    label: "GitHub",
    value: site.quickContacts.find((item) => item.kind === "github")?.value ?? "",
    href: site.quickContacts.find((item) => item.kind === "github")?.href ?? "#",
    icon: GithubMark
  },
  {
    label: "LinkedIn",
    value: site.quickContacts.find((item) => item.kind === "linkedin")?.value ?? "",
    href: site.quickContacts.find((item) => item.kind === "linkedin")?.href ?? "#",
    icon: LinkedinMark
  },
  {
    label: "Telegram",
    value: site.quickContacts.find((item) => item.kind === "telegram")?.value ?? "",
    href: site.quickContacts.find((item) => item.kind === "telegram")?.href ?? "#",
    icon: Send
  },
  {
    label: "Location",
    value: site.location,
    href: "#",
    icon: MapPin
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s connect."
            description="Use the placeholders below for your real contact details. This section is designed to stay simple, direct, and professional."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.label}>
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                      <Icon className="h-5 w-5 text-accent-soft" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm uppercase tracking-[0.22em] text-muted">{item.label}</p>
                      {item.label === "Location" ? (
                        <p className="mt-2 break-all text-sm text-white">{item.value}</p>
                      ) : (
                        <a
                          href={item.href}
                          className="mt-2 block break-all text-sm text-white hover:text-accent-soft"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.value}
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
