import { saveSiteAction } from "@/app/admin/actions";
import { AdminCard, AdminField, AdminNotice } from "@/components/admin/AdminForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { requireAdmin } from "@/lib/admin-auth";
import { getManagedContent } from "@/lib/managed-content";

export default async function AdminSitePage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/site"
      heading="Site settings"
      subheading="Control your name, CTA, core SEO text, and quick contact details from one page."
    >
      <form action={saveSiteAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        <AdminCard title="Branding">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Full name" name="name" defaultValue={content.site.name} />
            <AdminField label="Short name" name="shortName" defaultValue={content.site.shortName} />
            <AdminField label="Hero/SEO title" name="title" defaultValue={content.site.title} />
            <AdminField label="Metadata base" name="metadataBase" defaultValue={content.site.metadataBase} />
          </div>
          <div className="mt-4">
            <AdminField label="Description" name="description" defaultValue={content.site.description} />
          </div>
        </AdminCard>

        <AdminCard title="Contact and CTA">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Availability line" name="availability" defaultValue={content.site.availability} />
            <AdminField label="Location line" name="location" defaultValue={content.site.location} />
            <AdminField label="CTA label" name="ctaLabel" defaultValue={content.site.ctaLabel} />
            <AdminField label="CTA link" name="ctaHref" defaultValue={content.site.ctaHref} />
            <AdminField label="Email" name="email" defaultValue={content.site.email} />
            <AdminField label="Phone" name="phone" defaultValue={content.site.phone} />
            <AdminField label="GitHub URL" name="github" defaultValue={content.site.github} />
            <AdminField label="LinkedIn URL" name="linkedin" defaultValue={content.site.linkedin} />
            <AdminField label="Telegram URL" name="telegram" defaultValue={content.site.telegram} />
            <AdminField label="Discord handle/link" name="discord" defaultValue={content.site.discord} />
          </div>
        </AdminCard>

        <SubmitButton />
      </form>
    </AdminShell>
  );
}
