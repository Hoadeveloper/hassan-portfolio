import { saveProjectsAction } from "@/app/admin/actions";
import {
  AdminCard,
  AdminField,
  AdminNotice,
  AdminSelect,
  AdminTextarea,
} from "@/components/admin/AdminForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { requireAdmin } from "@/lib/admin-auth";
import { getManagedContent } from "@/lib/managed-content";

export default async function AdminProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/projects"
      heading="Projects page"
      subheading="Manage the featured project card, filter pills, sidebar profile, and the smaller project cards."
    >
      <form action={saveProjectsAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        <AdminCard title="Page header and sidebar">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Page title" name="pageTitle" defaultValue={content.projects.pageTitle} />
            <AdminField label="Sidebar name" name="sidebarName" defaultValue={content.projects.sidebarName} />
            <AdminField label="Sidebar role" name="sidebarRole" defaultValue={content.projects.sidebarRole} />
            <AdminField label="Sidebar status text" name="sidebarStatusText" defaultValue={content.projects.sidebarStatusText} />
          </div>
          <div className="mt-4">
            <AdminTextarea label="Intro text" name="intro" defaultValue={content.projects.intro} rows={2} />
            <div className="mt-4">
              <AdminTextarea label="Filters (one per line)" name="filters" defaultValue={content.projects.filters.join("\n")} rows={5} />
            </div>
          </div>
        </AdminCard>

        <AdminCard title="Featured project">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Category" name="featured.category" defaultValue={content.projects.featuredProject.category} />
            <AdminField label="Title" name="featured.title" defaultValue={content.projects.featuredProject.title} />
            <AdminField label="Primary button label" name="featured.primary.label" defaultValue={content.projects.featuredProject.primaryButton.label} />
            <AdminField label="Primary button href" name="featured.primary.href" defaultValue={content.projects.featuredProject.primaryButton.href} />
            <AdminField label="Secondary button label" name="featured.secondary.label" defaultValue={content.projects.featuredProject.secondaryButton.label} />
            <AdminField label="Secondary button href" name="featured.secondary.href" defaultValue={content.projects.featuredProject.secondaryButton.href} />
            <AdminField label="Visual eyebrow" name="featured.visualEyebrow" defaultValue={content.projects.featuredProject.visualEyebrow} />
            <AdminField label="Visual title" name="featured.visualTitle" defaultValue={content.projects.featuredProject.visualTitle} />
          </div>
          <div className="mt-4 grid gap-4">
            <AdminTextarea label="Description" name="featured.description" defaultValue={content.projects.featuredProject.description} rows={3} />
            <AdminTextarea label="Visual summary" name="featured.visualSummary" defaultValue={content.projects.featuredProject.visualSummary} rows={2} />
          </div>
        </AdminCard>

        <AdminCard title="Project cards">
          <input type="hidden" name="cards.count" value={content.projects.cards.length} />
          <div className="grid gap-4">
            {content.projects.cards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Title" name={`cards.${index}.title`} defaultValue={card.title} />
                  <AdminField label="Category" name={`cards.${index}.category`} defaultValue={card.category} />
                  <AdminField label="CTA" name={`cards.${index}.cta`} defaultValue={card.cta} />
                  <AdminField label="Href" name={`cards.${index}.href`} defaultValue={card.href} />
                  <AdminSelect label="Icon" name={`cards.${index}.icon`} defaultValue={card.icon} options={["database", "sparkles", "globe"]} />
                  <AdminSelect label="Accent" name={`cards.${index}.accent`} defaultValue={card.accent} options={["backend", "api", "website"]} />
                </div>
                <div className="mt-4">
                  <AdminTextarea label="Description" name={`cards.${index}.description`} defaultValue={card.description} rows={2} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <SubmitButton />
      </form>
    </AdminShell>
  );
}
