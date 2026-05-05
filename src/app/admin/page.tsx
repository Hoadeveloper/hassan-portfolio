import Link from "next/link";

import { AdminCard } from "@/components/admin/AdminForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin-auth";
import { getManagedContent } from "@/lib/managed-content";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const content = await getManagedContent();

  const cards = [
    {
      label: "Homepage sections",
      value: "4 live sections",
      hint: `${content.home.section3.capabilities.length} capability cards, ${content.home.section4.modules.length} stack modules`,
      href: "/admin/home",
    },
    {
      label: "Projects",
      value: `${content.projects.cards.length + 1} project blocks`,
      hint: `${content.projects.filters.length} filter pills`,
      href: "/admin/projects",
    },
    {
      label: "Resume",
      value: `${content.resume.experience.length} experience entries`,
      hint: `${content.resume.education.length} education entries`,
      href: "/admin/resume",
    },
    {
      label: "Blog",
      value: `${content.blog.posts.length} posts tracked`,
      hint: `${content.blog.posts.filter((post) => post.status === "published").length} published`,
      href: "/admin/blog",
    },
  ];

  return (
    <AdminShell
      pathname="/admin"
      heading="Overview"
      subheading="This dashboard gives you one place to manage the portfolio content, navigation, and major site settings."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {cards.map((card) => (
          <AdminCard key={card.label} title={card.label} description={card.hint}>
            <div className="flex items-end justify-between gap-4">
              <p className="text-[1.8rem] font-semibold tracking-tight text-white">{card.value}</p>
              <Link href={card.href} className="text-sm text-cyan-300 transition hover:text-cyan-200">
                Open editor
              </Link>
            </div>
          </AdminCard>
        ))}
      </div>
    </AdminShell>
  );
}
