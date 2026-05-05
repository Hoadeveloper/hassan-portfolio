"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  clearAdminSession,
  clearAdminLoginAttempts,
  createAdminSession,
  getAdminLoginLockout,
  getAdminRequestIdentifier,
  isAuthenticatedAdmin,
  recordAdminLoginFailure,
  verifyAdminCredentials,
} from "@/lib/admin-auth";
import {
  getManagedContent,
  getOptionalString,
  getString,
  requireValue,
  saveManagedContent,
  splitLines,
} from "@/lib/managed-content";
import type {
  BlogPostContent,
  HomeCapabilityCard,
  HomePrincipleCard,
  ProjectCardContent,
  ResumeEducationItem,
  ResumeExperienceItem,
  StackModule,
} from "@/types/managed-content";

function redirectWithStatus(pathname: string, status: "saved" | "error", message?: string) {
  const query = new URLSearchParams();
  query.set(status, "1");
  if (message) {
    query.set("message", message);
  }
  redirect(`${pathname}?${query.toString()}`);
}

async function assertAdminSession() {
  const authenticated = await isAuthenticatedAdmin();
  if (!authenticated) {
    redirect("/admin/login");
  }
}

function revalidateManagedRoutes() {
  [
    "/",
    "/portfolio",
    "/contact",
    "/resume",
    "/blog",
    "/project",
    "/admin",
    "/admin/site",
    "/admin/navigation",
    "/admin/home",
    "/admin/projects",
    "/admin/resume",
    "/admin/blog",
    "/admin/media",
  ].forEach((route) => revalidatePath(route));
}

export async function loginAction(_: { error?: string } | undefined, formData: FormData) {
  const username = getString(formData, "username");
  const password = getString(formData, "password");
  const requestIdentifier = await getAdminRequestIdentifier();

  try {
    const lockout = getAdminLoginLockout(requestIdentifier);
    if (lockout) {
      const retryAfterMinutes = Math.ceil(lockout.retryAfterSeconds / 60);
      return {
        error: `Too many sign-in attempts. Try again in about ${retryAfterMinutes} minute${retryAfterMinutes === 1 ? "" : "s"}.`,
      };
    }

    requireValue("Username", username);
    requireValue("Password", password);
    const isValid = await verifyAdminCredentials(username, password);
    if (!isValid) {
      const nextLockout = recordAdminLoginFailure(requestIdentifier);
      if (nextLockout) {
        const retryAfterMinutes = Math.ceil(nextLockout.retryAfterSeconds / 60);
        return {
          error: `Too many sign-in attempts. Try again in about ${retryAfterMinutes} minute${retryAfterMinutes === 1 ? "" : "s"}.`,
        };
      }

      return { error: "Invalid admin credentials." };
    }

    clearAdminLoginAttempts(requestIdentifier);
    await createAdminSession();
  } catch (error) {
    return {
      error:
        error instanceof Error ? error.message : "Unable to sign in to the admin panel.",
    };
  }

  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function saveSiteAction(formData: FormData) {
  await assertAdminSession();

  const content = await getManagedContent();
  const name = getString(formData, "name");
  const shortName = getString(formData, "shortName");
  const title = getString(formData, "title");
  const description = getString(formData, "description");
  const location = getString(formData, "location");
  const availability = getString(formData, "availability");
  const metadataBase = getString(formData, "metadataBase");
  const ctaLabel = getString(formData, "ctaLabel");
  const ctaHref = getString(formData, "ctaHref");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const github = getString(formData, "github");
  const linkedin = getString(formData, "linkedin");
  const telegram = getString(formData, "telegram");
  const discord = getString(formData, "discord");

  try {
    requireValue("Site name", name);
    requireValue("Short name", shortName);
    requireValue("Site title", title);
    requireValue("Site description", description);
    requireValue("Availability", availability);
    requireValue("Metadata base", metadataBase);

    content.site = {
      ...content.site,
      name,
      shortName,
      title,
      description,
      location,
      availability,
      metadataBase,
      ctaLabel,
      ctaHref,
      email,
      phone,
      github,
      linkedin,
      telegram,
      discord,
      quickContacts: [
        { kind: "email", label: "Email", value: email, href: `mailto:${email}` },
        { kind: "phone", label: "Phone", value: phone, href: `tel:${phone.replace(/[^\d+]/g, "")}` },
        { kind: "github", label: "GitHub", value: github.replace(/^https?:\/\//, ""), href: github },
        {
          kind: "linkedin",
          label: "LinkedIn",
          value: linkedin.replace(/^https?:\/\//, ""),
          href: linkedin,
        },
        {
          kind: "telegram",
          label: "Telegram",
          value: telegram.replace(/^https?:\/\/t\.me\//, "@"),
          href: telegram,
        },
      ],
    };

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/site", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/site",
      "error",
      error instanceof Error ? error.message : "Unable to save site settings.",
    );
  }
}

export async function saveNavigationAction(formData: FormData) {
  await assertAdminSession();
  const content = await getManagedContent();

  try {
    const count = Number(getString(formData, "navCount") || "0");
    const items = Array.from({ length: count }, (_, index) => ({
      label: getString(formData, `nav.${index}.label`),
      href: getString(formData, `nav.${index}.href`),
    })).filter((item) => item.label && item.href);

    if (!items.length) {
      throw new Error("Add at least one navigation item.");
    }

    content.navigation.items = items;
    content.navigation.footerIntro = getString(formData, "footerIntro");
    content.navigation.footerBuiltWith = getString(formData, "footerBuiltWith");

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/navigation", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/navigation",
      "error",
      error instanceof Error ? error.message : "Unable to save navigation.",
    );
  }
}

export async function saveHomeAction(formData: FormData) {
  await assertAdminSession();
  const content = await getManagedContent();

  try {
    content.home.section1 = {
      eyebrow: getString(formData, "section1.eyebrow"),
      name: getString(formData, "section1.name"),
      roleLine: getString(formData, "section1.roleLine"),
      profileRole: getString(formData, "section1.profileRole"),
      description: getString(formData, "section1.description"),
      statusText: getString(formData, "section1.statusText"),
      highlights: splitLines(formData.get("section1.highlights")),
      primaryCta: {
        label: getString(formData, "section1.primaryCta.label"),
        href: getString(formData, "section1.primaryCta.href"),
      },
      secondaryCta: {
        label: getString(formData, "section1.secondaryCta.label"),
        href: getString(formData, "section1.secondaryCta.href"),
      },
    };

    const principleCount = Number(getString(formData, "section2.principleCount") || "0");
    const principleCards: HomePrincipleCard[] = Array.from(
      { length: principleCount },
      (_, index) => ({
        title: getString(formData, `section2.principles.${index}.title`),
        body: getString(formData, `section2.principles.${index}.body`),
        icon: getString(formData, `section2.principles.${index}.icon`) as HomePrincipleCard["icon"],
      }),
    ).filter((item) => item.title && item.body);

    content.home.section2 = {
      eyebrow: getString(formData, "section2.eyebrow"),
      headingLine1: getString(formData, "section2.headingLine1"),
      headingLine2: getString(formData, "section2.headingLine2"),
      descriptionPrimary: getString(formData, "section2.descriptionPrimary"),
      descriptionSecondary: getString(formData, "section2.descriptionSecondary"),
      tags: splitLines(formData.get("section2.tags")),
      quote: getString(formData, "section2.quote"),
      principleCards,
    };

    const capabilityCount = Number(getString(formData, "section3.capabilityCount") || "0");
    const capabilities: HomeCapabilityCard[] = Array.from({ length: capabilityCount }, (_, index) => ({
      title: getString(formData, `section3.capabilities.${index}.title`),
      body: getString(formData, `section3.capabilities.${index}.body`),
      icon: getString(formData, `section3.capabilities.${index}.icon`) as HomeCapabilityCard["icon"],
    })).filter((item) => item.title && item.body);

    content.home.section3 = {
      eyebrow: getString(formData, "section3.eyebrow"),
      heading: getString(formData, "section3.heading"),
      description: getString(formData, "section3.description"),
      sideNote: getString(formData, "section3.sideNote"),
      capabilities,
    };

    const moduleCount = Number(getString(formData, "section4.moduleCount") || "0");
    const modules: StackModule[] = Array.from({ length: moduleCount }, (_, index) => ({
      title: getString(formData, `section4.modules.${index}.title`),
      icon: getString(formData, `section4.modules.${index}.icon`) as StackModule["icon"],
      items: splitLines(formData.get(`section4.modules.${index}.items`)).map((line) => {
        const [label, flag] = line.split("|").map((part) => part.trim());
        return { label, emphasis: flag === "emphasis" };
      }),
    })).filter((item) => item.title);

    content.home.section4 = {
      eyebrow: getString(formData, "section4.eyebrow"),
      centerTitle: getString(formData, "section4.centerTitle"),
      centerSubtitle: getString(formData, "section4.centerSubtitle"),
      modules,
    };

    content.home.section5 = {
      title: getString(formData, "section5.title"),
      description: getString(formData, "section5.description"),
    };
    content.home.section6 = {
      title: getString(formData, "section6.title"),
      description: getString(formData, "section6.description"),
      primaryCta: {
        label: getString(formData, "section6.primaryCta.label"),
        href: getString(formData, "section6.primaryCta.href"),
      },
      secondaryCta: {
        label: getString(formData, "section6.secondaryCta.label"),
        href: getString(formData, "section6.secondaryCta.href"),
      },
    };

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/home", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/home",
      "error",
      error instanceof Error ? error.message : "Unable to save homepage content.",
    );
  }
}

export async function saveProjectsAction(formData: FormData) {
  await assertAdminSession();
  const content = await getManagedContent();

  try {
    const cardCount = Number(getString(formData, "cards.count") || "0");
    const cards: ProjectCardContent[] = Array.from({ length: cardCount }, (_, index) => ({
      title: getString(formData, `cards.${index}.title`),
      category: getString(formData, `cards.${index}.category`),
      description: getString(formData, `cards.${index}.description`),
      href: getString(formData, `cards.${index}.href`),
      cta: getString(formData, `cards.${index}.cta`),
      icon: getString(formData, `cards.${index}.icon`) as ProjectCardContent["icon"],
      accent: getString(formData, `cards.${index}.accent`) as ProjectCardContent["accent"],
    })).filter((item) => item.title);

    content.projects = {
      pageTitle: getString(formData, "pageTitle"),
      intro: getString(formData, "intro"),
      filters: splitLines(formData.get("filters")),
      sidebarName: getString(formData, "sidebarName"),
      sidebarRole: getString(formData, "sidebarRole"),
      sidebarStatusText: getString(formData, "sidebarStatusText"),
      featuredProject: {
        category: getString(formData, "featured.category"),
        title: getString(formData, "featured.title"),
        description: getString(formData, "featured.description"),
        primaryButton: {
          label: getString(formData, "featured.primary.label"),
          href: getString(formData, "featured.primary.href"),
        },
        secondaryButton: {
          label: getString(formData, "featured.secondary.label"),
          href: getString(formData, "featured.secondary.href"),
        },
        visualEyebrow: getString(formData, "featured.visualEyebrow"),
        visualTitle: getString(formData, "featured.visualTitle"),
        visualSummary: getString(formData, "featured.visualSummary"),
      },
      cards,
    };

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/projects", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/projects",
      "error",
      error instanceof Error ? error.message : "Unable to save project content.",
    );
  }
}

export async function saveResumeAction(formData: FormData) {
  await assertAdminSession();
  const content = await getManagedContent();

  try {
    const educationCount = Number(getString(formData, "education.count") || "0");
    const experienceCount = Number(getString(formData, "experience.count") || "0");

    const education: ResumeEducationItem[] = Array.from({ length: educationCount }, (_, index) => ({
      title: getString(formData, `education.${index}.title`),
      subtitle: getString(formData, `education.${index}.subtitle`),
      period: getString(formData, `education.${index}.period`),
      bullets: splitLines(formData.get(`education.${index}.bullets`)),
    })).filter((item) => item.title);

    const experience: ResumeExperienceItem[] = Array.from({ length: experienceCount }, (_, index) => ({
      title: getString(formData, `experience.${index}.title`),
      subtitle: getString(formData, `experience.${index}.subtitle`),
      period: getString(formData, `experience.${index}.period`),
      meta: getOptionalString(formData, `experience.${index}.meta`),
      visualLabel: getString(formData, `experience.${index}.visualLabel`),
      icon: getString(formData, `experience.${index}.icon`) as ResumeExperienceItem["icon"],
      bullets: splitLines(formData.get(`experience.${index}.bullets`)),
    })).filter((item) => item.title);

    content.resume = {
      pageTitle: getString(formData, "pageTitle"),
      sidebarName: getString(formData, "sidebarName"),
      sidebarRole: getString(formData, "sidebarRole"),
      sidebarStatusText: getString(formData, "sidebarStatusText"),
      downloadLabel: getString(formData, "downloadLabel"),
      downloadHref: getString(formData, "downloadHref"),
      education,
      experience,
    };

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/resume", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/resume",
      "error",
      error instanceof Error ? error.message : "Unable to save resume content.",
    );
  }
}

export async function saveBlogAction(formData: FormData) {
  await assertAdminSession();
  const content = await getManagedContent();

  try {
    const postCount = Number(getString(formData, "posts.count") || "0");
    const posts: BlogPostContent[] = Array.from({ length: postCount }, (_, index) => ({
      eyebrow: getString(formData, `posts.${index}.eyebrow`),
      title: getString(formData, `posts.${index}.title`),
      author: getString(formData, `posts.${index}.author`),
      excerpt: getString(formData, `posts.${index}.excerpt`),
      status: getString(formData, `posts.${index}.status`) as BlogPostContent["status"],
      slug: getString(formData, `posts.${index}.slug`),
      category: getString(formData, `posts.${index}.category`),
      coverImage: getString(formData, `posts.${index}.coverImage`),
      ctaLabel: getString(formData, `posts.${index}.ctaLabel`),
      ctaHref: getString(formData, `posts.${index}.ctaHref`),
      date: getOptionalString(formData, `posts.${index}.date`),
      coverTitle: getOptionalString(formData, `posts.${index}.coverTitle`),
    })).filter((item) => item.title);

    content.blog = {
      pageTitle: getString(formData, "pageTitle"),
      sidebarName: getString(formData, "sidebarName"),
      sidebarRole: getString(formData, "sidebarRole"),
      sidebarStatusText: getString(formData, "sidebarStatusText"),
      posts,
    };

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/blog", "saved");
  } catch (error) {
    redirectWithStatus(
      "/admin/blog",
      "error",
      error instanceof Error ? error.message : "Unable to save blog content.",
    );
  }
}

export async function uploadMediaAction(formData: FormData) {
  await assertAdminSession();

  try {
    const bucket = getString(formData, "bucket");
    const target = getString(formData, "target");
    const file = formData.get("file");

    if (!(file instanceof File) || file.size === 0) {
      throw new Error("Choose a file to upload.");
    }

    const safeBucket = bucket.replace(/[^a-z0-9-]/gi, "").toLowerCase() || "general";
    const fileName = `${Date.now()}-${file.name
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9.\-_]/gi, "")
      .toLowerCase()}`;
    const relativeDirectory = path.join("uploads", safeBucket);
    const absoluteDirectory = path.join(process.cwd(), "public", relativeDirectory);
    await mkdir(absoluteDirectory, { recursive: true });

    const relativePath = `/${path.join(relativeDirectory, fileName).replace(/\\/g, "/")}`;
    const absolutePath = path.join(absoluteDirectory, fileName);
    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(absolutePath, bytes);

    const content = await getManagedContent();
    if (target === "profileImage") {
      content.media.profileImage = relativePath;
    }
    if (target === "resumeFile") {
      content.media.resumeFile = relativePath;
    }
    if (target.startsWith("project:")) {
      content.media.projectImages[target.replace("project:", "")] = relativePath;
    }
    if (target.startsWith("blog:")) {
      content.media.blogCoverImages[target.replace("blog:", "")] = relativePath;
    }

    await saveManagedContent(content);
    revalidateManagedRoutes();
    redirectWithStatus("/admin/media", "saved", `Uploaded to ${relativePath}`);
  } catch (error) {
    redirectWithStatus(
      "/admin/media",
      "error",
      error instanceof Error ? error.message : "Unable to upload media.",
    );
  }
}
