import { saveResumeAction } from "@/app/admin/actions";
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

export default async function AdminResumePage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/resume"
      heading="Resume content"
      subheading="Update sidebar status, education, experience, and the downloadable CV link from one editor."
    >
      <form action={saveResumeAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        <AdminCard title="Page header and sidebar">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Page title" name="pageTitle" defaultValue={content.resume.pageTitle} />
            <AdminField label="Sidebar name" name="sidebarName" defaultValue={content.resume.sidebarName} />
            <AdminField label="Sidebar role" name="sidebarRole" defaultValue={content.resume.sidebarRole} />
            <AdminField label="Sidebar status text" name="sidebarStatusText" defaultValue={content.resume.sidebarStatusText} />
            <AdminField label="Download label" name="downloadLabel" defaultValue={content.resume.downloadLabel} />
            <AdminField label="Download href" name="downloadHref" defaultValue={content.resume.downloadHref} />
          </div>
        </AdminCard>

        <AdminCard title="Education">
          <input type="hidden" name="education.count" value={content.resume.education.length} />
          <div className="grid gap-4">
            {content.resume.education.map((item, index) => (
              <div key={`${item.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Title" name={`education.${index}.title`} defaultValue={item.title} />
                  <AdminField label="Subtitle" name={`education.${index}.subtitle`} defaultValue={item.subtitle} />
                  <AdminField label="Period" name={`education.${index}.period`} defaultValue={item.period} />
                </div>
                <div className="mt-4">
                  <AdminTextarea label="Bullets (one per line)" name={`education.${index}.bullets`} defaultValue={item.bullets.join("\n")} rows={4} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Experience">
          <input type="hidden" name="experience.count" value={content.resume.experience.length} />
          <div className="grid gap-4">
            {content.resume.experience.map((item, index) => (
              <div key={`${item.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Title" name={`experience.${index}.title`} defaultValue={item.title} />
                  <AdminField label="Subtitle" name={`experience.${index}.subtitle`} defaultValue={item.subtitle} />
                  <AdminField label="Period" name={`experience.${index}.period`} defaultValue={item.period} />
                  <AdminField label="Meta" name={`experience.${index}.meta`} defaultValue={item.meta} />
                  <AdminField label="Visual label" name={`experience.${index}.visualLabel`} defaultValue={item.visualLabel} />
                  <AdminSelect label="Icon" name={`experience.${index}.icon`} defaultValue={item.icon} options={["workflow", "bot", "layers-2"]} />
                </div>
                <div className="mt-4">
                  <AdminTextarea label="Bullets (one per line)" name={`experience.${index}.bullets`} defaultValue={item.bullets.join("\n")} rows={5} />
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
