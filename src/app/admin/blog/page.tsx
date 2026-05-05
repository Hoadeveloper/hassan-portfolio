import { saveBlogAction } from "@/app/admin/actions";
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

export default async function AdminBlogPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  return (
    <AdminShell
      pathname="/admin/blog"
      heading="Blog content"
      subheading="Manage the blog board, post copy, slugs, status, CTA links, and cover image paths."
    >
      <form action={saveBlogAction} className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        <AdminCard title="Page header and sidebar">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField label="Page title" name="pageTitle" defaultValue={content.blog.pageTitle} />
            <AdminField label="Sidebar name" name="sidebarName" defaultValue={content.blog.sidebarName} />
            <AdminField label="Sidebar role" name="sidebarRole" defaultValue={content.blog.sidebarRole} />
            <AdminField label="Sidebar status text" name="sidebarStatusText" defaultValue={content.blog.sidebarStatusText} />
          </div>
        </AdminCard>

        <AdminCard title="Posts">
          <input type="hidden" name="posts.count" value={content.blog.posts.length} />
          <div className="grid gap-4">
            {content.blog.posts.map((post, index) => (
              <div key={`${post.slug}-${index}`} className="rounded-[18px] border border-white/8 p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <AdminField label="Eyebrow" name={`posts.${index}.eyebrow`} defaultValue={post.eyebrow} />
                  <AdminField label="Title" name={`posts.${index}.title`} defaultValue={post.title} />
                  <AdminField label="Cover title" name={`posts.${index}.coverTitle`} defaultValue={post.coverTitle} />
                  <AdminField label="Author" name={`posts.${index}.author`} defaultValue={post.author} />
                  <AdminField label="Date" name={`posts.${index}.date`} defaultValue={post.date} />
                  <AdminField label="Slug" name={`posts.${index}.slug`} defaultValue={post.slug} />
                  <AdminField label="Category" name={`posts.${index}.category`} defaultValue={post.category} />
                  <AdminField label="CTA label" name={`posts.${index}.ctaLabel`} defaultValue={post.ctaLabel} />
                  <AdminField label="CTA href" name={`posts.${index}.ctaHref`} defaultValue={post.ctaHref} />
                  <AdminField label="Cover image path" name={`posts.${index}.coverImage`} defaultValue={post.coverImage} />
                  <AdminSelect label="Status" name={`posts.${index}.status`} defaultValue={post.status} options={["draft", "published"]} />
                </div>
                <div className="mt-4">
                  <AdminTextarea label="Excerpt" name={`posts.${index}.excerpt`} defaultValue={post.excerpt} rows={4} />
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
