import {
  Bot,
  Code2,
  Database,
  Globe,
  LayoutPanelLeft,
  LockKeyhole,
  ServerCog,
  Waypoints,
} from "lucide-react";

export const homeCapabilities = [
  {
    title: "Frontend development",
    body:
      "Modern interfaces built to feel clean, responsive, and easy to use across real screens and real users.",
    icon: LayoutPanelLeft,
  },
  {
    title: "Backend development",
    body:
      "Application logic, structured data flow, and backend foundations that support dependable software behavior.",
    icon: ServerCog,
  },
  {
    title: "Web app development",
    body:
      "Complete website and web application builds that connect usable frontend experiences with practical backend systems.",
    icon: Globe,
  },
  {
    title: "PHP and Python development",
    body:
      "Flexible development across PHP and Python for websites, APIs, backend workflows, and software tooling.",
    icon: Code2,
  },
  {
    title: "API integration and backend logic",
    body:
      "Useful API-driven features, service connections, and backend logic that help products behave clearly and consistently.",
    icon: Waypoints,
  },
  {
    title: "Telegram bot development",
    body:
      "Telegram bots that automate actions, streamline communication, and connect users to useful features faster.",
    icon: Bot,
  },
  {
    title: "Discord bot development",
    body:
      "Discord bot tools designed to support communities, workflows, and practical user interactions.",
    icon: Database,
  },
  {
    title: "Security-aware implementation",
    body:
      "Ethical hacking fundamentals inform how I think about validation, input handling, and building with more awareness of risk.",
    icon: LockKeyhole,
  },
] as const;

export const homeStackItems = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  "Flask",
  "FastAPI",
  "MySQL",
  "python-telegram-bot",
  "discord.py",
  "Web Development",
  "Web Applications",
  "API Development",
  "Software Development",
  "Ethical Hacking Fundamentals",
] as const;

export const homeSnapshotItems = [
  "Frontend and backend development",
  "Websites and web applications",
  "PHP and Python development",
  "APIs and backend systems",
  "Telegram and Discord bots",
  "Ethical hacking awareness",
] as const;
