import { saveHomeAction } from "@/app/admin/actions";
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

export default async function AdminHomePage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/home"
      heading="Homepage content"
      subheading="Manage the live content for sections 1 through 4, plus reserved section 5 and section 6 CTA content for future expansion."
    >
      <form action={saveHomeAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        <AdminCard title="Section 1 - Hero">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Eyebrow" name="section1.eyebrow" defaultValue={content.home.section1.eyebrow} />
            <AdminField label="Display name" name="section1.name" defaultValue={content.home.section1.name} />
            <AdminField label="Role line" name="section1.roleLine" defaultValue={content.home.section1.roleLine} />
            <AdminField label="Profile role" name="section1.profileRole" defaultValue={content.home.section1.profileRole} />
            <AdminField label="Primary CTA label" name="section1.primaryCta.label" defaultValue={content.home.section1.primaryCta.label} />
            <AdminField label="Primary CTA link" name="section1.primaryCta.href" defaultValue={content.home.section1.primaryCta.href} />
            <AdminField label="Secondary CTA label" name="section1.secondaryCta.label" defaultValue={content.home.section1.secondaryCta.label} />
            <AdminField label="Secondary CTA link" name="section1.secondaryCta.href" defaultValue={content.home.section1.secondaryCta.href} />
          </div>
          <div className="mt-4 grid gap-4">
            <AdminTextarea label="Hero description" name="section1.description" defaultValue={content.home.section1.description} rows={3} />
            <AdminTextarea label="Status line" name="section1.statusText" defaultValue={content.home.section1.statusText} rows={2} />
            <AdminTextarea label="Highlights (one per line)" name="section1.highlights" defaultValue={content.home.section1.highlights.join("\n")} rows={4} />
          </div>
        </AdminCard>

        <AdminCard title="Section 2 - Approach">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Eyebrow" name="section2.eyebrow" defaultValue={content.home.section2.eyebrow} />
            <AdminField label="Heading line 1" name="section2.headingLine1" defaultValue={content.home.section2.headingLine1} />
            <AdminField label="Heading line 2" name="section2.headingLine2" defaultValue={content.home.section2.headingLine2} />
          </div>
          <div className="mt-4 grid gap-4">
            <AdminTextarea label="Primary description" name="section2.descriptionPrimary" defaultValue={content.home.section2.descriptionPrimary} rows={3} />
            <AdminTextarea label="Secondary description" name="section2.descriptionSecondary" defaultValue={content.home.section2.descriptionSecondary} rows={3} />
            <AdminTextarea label="Tags (one per line)" name="section2.tags" defaultValue={content.home.section2.tags.join("\n")} rows={4} />
            <AdminTextarea label="Quote" name="section2.quote" defaultValue={content.home.section2.quote} rows={2} />
          </div>
          <input type="hidden" name="section2.principleCount" value={content.home.section2.principleCards.length} />
          <div className="mt-5 grid gap-4">
            {content.home.section2.principleCards.map((card, index) => (
              <div key={`${card.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Card title" name={`section2.principles.${index}.title`} defaultValue={card.title} />
                  <AdminField label="Card body" name={`section2.principles.${index}.body`} defaultValue={card.body} />
                  <AdminSelect label="Icon" name={`section2.principles.${index}.icon`} defaultValue={card.icon} options={["check-square-2", "lightbulb", "workflow", "shield-check"]} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Section 3 - Capabilities">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Eyebrow" name="section3.eyebrow" defaultValue={content.home.section3.eyebrow} />
            <AdminField label="Heading" name="section3.heading" defaultValue={content.home.section3.heading} />
          </div>
          <div className="mt-4 grid gap-4">
            <AdminTextarea label="Description" name="section3.description" defaultValue={content.home.section3.description} rows={3} />
            <AdminTextarea label="Side note" name="section3.sideNote" defaultValue={content.home.section3.sideNote} rows={3} />
          </div>
          <input type="hidden" name="section3.capabilityCount" value={content.home.section3.capabilities.length} />
          <div className="mt-5 grid gap-4">
            {content.home.section3.capabilities.map((card, index) => (
              <div key={`${card.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Capability title" name={`section3.capabilities.${index}.title`} defaultValue={card.title} />
                  <AdminField label="Capability body" name={`section3.capabilities.${index}.body`} defaultValue={card.body} />
                  <AdminSelect label="Icon" name={`section3.capabilities.${index}.icon`} defaultValue={card.icon} options={["code-2", "database", "app-window", "send", "bot", "shield-check"]} />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Section 4 - Core stack">
          <div className="grid gap-4 md:grid-cols-3">
            <AdminField label="Eyebrow" name="section4.eyebrow" defaultValue={content.home.section4.eyebrow} />
            <AdminField label="Center title" name="section4.centerTitle" defaultValue={content.home.section4.centerTitle} />
            <AdminField label="Center subtitle" name="section4.centerSubtitle" defaultValue={content.home.section4.centerSubtitle} />
          </div>
          <input type="hidden" name="section4.moduleCount" value={content.home.section4.modules.length} />
          <div className="mt-5 grid gap-4">
            {content.home.section4.modules.map((module, index) => (
              <div key={`${module.title}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Module title" name={`section4.modules.${index}.title`} defaultValue={module.title} />
                  <AdminSelect label="Module icon" name={`section4.modules.${index}.icon`} defaultValue={module.icon} options={["braces", "database", "bot", "globe"]} />
                  <AdminTextarea
                    label="Items (one per line, append | emphasis for highlighted pills)"
                    name={`section4.modules.${index}.items`}
                    defaultValue={module.items.map((item) => `${item.label}${item.emphasis ? " | emphasis" : ""}`).join("\n")}
                    rows={5}
                  />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard title="Reserved homepage sections">
          <div className="grid gap-4">
            <AdminField label="Section 5 title" name="section5.title" defaultValue={content.home.section5.title} />
            <AdminTextarea label="Section 5 description" name="section5.description" defaultValue={content.home.section5.description} rows={2} />
            <AdminField label="Section 6 title" name="section6.title" defaultValue={content.home.section6.title} />
            <AdminTextarea label="Section 6 description" name="section6.description" defaultValue={content.home.section6.description} rows={2} />
            <div className="grid gap-4 md:grid-cols-2">
              <AdminField label="Section 6 primary CTA label" name="section6.primaryCta.label" defaultValue={content.home.section6.primaryCta.label} />
              <AdminField label="Section 6 primary CTA href" name="section6.primaryCta.href" defaultValue={content.home.section6.primaryCta.href} />
              <AdminField label="Section 6 secondary CTA label" name="section6.secondaryCta.label" defaultValue={content.home.section6.secondaryCta.label} />
              <AdminField label="Section 6 secondary CTA href" name="section6.secondaryCta.href" defaultValue={content.home.section6.secondaryCta.href} />
            </div>
          </div>
        </AdminCard>

        <SubmitButton />
      </form>
    </AdminShell>
  );
}
