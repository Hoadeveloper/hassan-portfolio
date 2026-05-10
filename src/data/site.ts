import type { Site } from "@/types/site";

export const site: Site = {
  name: "Hassan Olanrewaju Abdulrahman",
  shortName: "Hassan Abdulrahman",
  title:
    "Frontend, backend, and automation-focused developer building modern websites, web apps, APIs, and bot-powered solutions.",
  description:
    "Personal portfolio of Hassan Olanrewaju Abdulrahman, a Full-stack developer working across frontend development, backend systems, PHP, Python, APIs, bots, and practical software solutions.",
  location: "Available for remote-friendly web, backend, and automation work.",
  availability: "Open to freelance, contract, and long-term engineering opportunities.",
  roles: [
    "Frontend Developer",
    "Python Developer",
    "PHP Developer",
    "Backend Developer",
    "Web App Developer",
    "Telegram Bot Developer",
    "Discord Bot Developer",
  ],
  navItems: [
    { href: "/portfolio", label: "Project" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
    { href: "/blog", label: "Blog" },
  ],
  contactActions: [
    {
      href: "/resume/hassan-abdulrahman-resume.pdf",
      label: "Download resume",
      description: "Get a concise overview of skills, technical direction, and experience.",
    },
    {
      href: "/contact",
      label: "Open contact page",
      description: "Start a conversation about a website, web app, backend system, or bot.",
    },
  ],
  contactDetails: [
    {
      label: "Core focus",
      value: "Full-stack developer",
      hint: "Frontend interfaces, backend systems, APIs, bots, and practical software solutions.",
    },
    {
      label: "Availability",
      value: "Open for work",
      hint: "Freelance, contract, and long-term opportunities across web and software development.",
    },
    {
      label: "Technical direction",
      value: "PHP, Python, frontend, and backend",
      hint: "Focused on clean implementation, useful products, and dependable software behavior.",
    },
  ],
  quickContacts: [
    {
      kind: "email",
      label: "Email",
      value: "lanrehassanabd@gmail.com",
      href: "mailto:lanrehassanabd@gmail.com",
    },
    {
      kind: "phone",
      label: "Phone",
      value: "+2349155247829",
      href: "tel:+2349155247829",
    },
    {
      kind: "github",
      label: "GitHub",
      value: "github.com/Hoadeveloper",
      href: "https://github.com/Hoadeveloper",
    },
    {
      kind: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/olanrewaju-hassan-919405259",
      href: "https://www.linkedin.com/in/olanrewaju-hassan-919405259/",
    },
    {
      kind: "telegram",
      label: "Telegram",
      value: "@hoadeveloper",
      href: "https://t.me/hoadeveloper",
    },
  ],
};
