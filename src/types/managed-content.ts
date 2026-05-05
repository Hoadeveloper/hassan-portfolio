export type QuickContactKind =
  | "email"
  | "phone"
  | "github"
  | "linkedin"
  | "telegram"
  | "discord";

export type QuickContact = {
  kind: QuickContactKind;
  label: string;
  value: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type ActionLink = {
  label: string;
  href: string;
};

export type HomePrincipleCard = {
  title: string;
  body: string;
  icon: "check-square-2" | "lightbulb" | "workflow" | "shield-check";
};

export type HomeCapabilityCard = {
  title: string;
  body: string;
  icon:
    | "code-2"
    | "database"
    | "app-window"
    | "send"
    | "bot"
    | "shield-check";
};

export type StackItem = {
  label: string;
  emphasis?: boolean;
};

export type StackModule = {
  title: string;
  icon: "braces" | "database" | "bot" | "globe";
  items: StackItem[];
};

export type ProjectCardContent = {
  title: string;
  category: string;
  description: string;
  href: string;
  cta: string;
  icon: "database" | "sparkles" | "globe";
  accent: "backend" | "api" | "website";
};

export type ResumeEducationItem = {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
};

export type ResumeExperienceItem = {
  title: string;
  subtitle: string;
  period: string;
  meta?: string;
  visualLabel: string;
  icon: "workflow" | "bot" | "layers-2";
  bullets: string[];
};

export type BlogPostContent = {
  eyebrow: string;
  title: string;
  author: string;
  excerpt: string;
  status: "draft" | "published";
  slug: string;
  category: string;
  coverImage: string;
  ctaLabel: string;
  ctaHref: string;
  date?: string;
  coverTitle?: string;
};

export type ManagedContent = {
  version: number;
  updatedAt: string;
  site: {
    name: string;
    shortName: string;
    title: string;
    description: string;
    location: string;
    availability: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    telegram: string;
    discord: string;
    metadataBase: string;
    ctaLabel: string;
    ctaHref: string;
    quickContacts: QuickContact[];
  };
  navigation: {
    items: NavigationItem[];
    footerIntro: string;
    footerBuiltWith: string;
  };
  media: {
    profileImage: string;
    resumeFile: string;
    projectImages: Record<string, string>;
    blogCoverImages: Record<string, string>;
  };
  home: {
    section1: {
      eyebrow: string;
      name: string;
      roleLine: string;
      profileRole: string;
      description: string;
      statusText: string;
      highlights: string[];
      primaryCta: ActionLink;
      secondaryCta: ActionLink;
    };
    section2: {
      eyebrow: string;
      headingLine1: string;
      headingLine2: string;
      descriptionPrimary: string;
      descriptionSecondary: string;
      tags: string[];
      quote: string;
      principleCards: HomePrincipleCard[];
    };
    section3: {
      eyebrow: string;
      heading: string;
      description: string;
      sideNote: string;
      capabilities: HomeCapabilityCard[];
    };
    section4: {
      eyebrow: string;
      centerTitle: string;
      centerSubtitle: string;
      modules: StackModule[];
    };
    section5: {
      title: string;
      description: string;
    };
    section6: {
      title: string;
      description: string;
      primaryCta: ActionLink;
      secondaryCta: ActionLink;
    };
  };
  projects: {
    pageTitle: string;
    intro: string;
    filters: string[];
    sidebarName: string;
    sidebarRole: string;
    sidebarStatusText: string;
    featuredProject: {
      category: string;
      title: string;
      description: string;
      primaryButton: ActionLink;
      secondaryButton: ActionLink;
      visualEyebrow: string;
      visualTitle: string;
      visualSummary: string;
    };
    cards: ProjectCardContent[];
  };
  resume: {
    pageTitle: string;
    sidebarName: string;
    sidebarRole: string;
    sidebarStatusText: string;
    downloadLabel: string;
    downloadHref: string;
    education: ResumeEducationItem[];
    experience: ResumeExperienceItem[];
  };
  blog: {
    pageTitle: string;
    sidebarName: string;
    sidebarRole: string;
    sidebarStatusText: string;
    posts: BlogPostContent[];
  };
};
