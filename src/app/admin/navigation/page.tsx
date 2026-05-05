import { saveNavigationAction } from "@/app/admin/actions";
import { AdminCard, AdminField, AdminNotice, AdminTextarea } from "@/components/admin/AdminForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { requireAdmin } from "@/lib/admin-auth";
import { getManagedContent } from "@/lib/managed-content";

export default async function AdminNavigationPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/navigation"
      heading="Navigation and footer"
      subheading="Update the top navigation labels/links and the shared footer copy that appears across the site."
    >
      <form action={saveNavigationAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />
        <input type="hidden" name="navCount" value={content.navigation.items.length} />

        <AdminCard title="Navigation items">
          <div className="grid gap-4">
            {content.navigation.items.map((item, index) => (
              <div key={`${item.label}-${index}`} className="grid gap-4 md:grid-cols-2">
                <AdminField label={`Label ${index + 1}`} name={`nav.${index}.label`} defaultValue={item.label} />
                <AdminField label={`Href ${index + 1}`} name={`nav.${index}.href`} defaultValue={item.href} />
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Footer copy">
          <div className="grid gap-4">
            <AdminTextarea label="Footer intro" name="footerIntro" defaultValue={content.navigation.footerIntro} rows={3} />
            <AdminTextarea label="Built with line" name="footerBuiltWith" defaultValue={content.navigation.footerBuiltWith} rows={2} />
          </div>
        </AdminCard>

        <SubmitButton />
      </form>
    </AdminShell>
  );
}
