import Image from "next/image";

import { uploadMediaAction } from "@/app/admin/actions";
import { AdminCard, AdminNotice } from "@/components/admin/AdminForm";
import { AdminShell } from "@/components/admin/AdminShell";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { requireAdmin } from "@/lib/admin-auth";
import { getManagedContent } from "@/lib/managed-content";

function MediaPreview({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return <p className="text-sm text-slate-400">No file assigned yet.</p>;
  }

  const isImage = /\.(png|jpe?g|webp|gif|svg)$/i.test(src);
  if (!isImage) {
    return (
      <a href={src} className="text-sm text-cyan-300 transition hover:text-cyan-200">
        {src}
      </a>
    );
  }

  return (
    <div className="relative h-28 w-full overflow-hidden rounded-[14px] border border-white/8 bg-[#092635]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}

export default async function AdminMediaPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const content = await getManagedContent();
  const params = searchParams ? await searchParams : undefined;

  const uploadTargets = [
    {
      title: "Profile image",
      bucket: "profile",
      target: "profileImage",
      current: content.media.profileImage,
    },
    {
      title: "Resume file",
      bucket: "resume",
      target: "resumeFile",
      current: content.media.resumeFile,
    },
    {
      title: "Featured project image",
      bucket: "projects",
      target: "project:formrouter",
      current: content.media.projectImages.formrouter ?? "",
    },
    {
      title: "Featured blog cover",
      bucket: "blog",
      target: "blog:reliable-api-workflows-for-modern-products",
      current: content.media.blogCoverImages["reliable-api-workflows-for-modern-products"] ?? "",
    },
  ];

  return (
    <AdminShell
      pathname="/admin/media"
      heading="Media and assets"
      subheading="Upload images and files into public storage, then automatically assign them to the managed content paths."
    >
      <div className="space-y-5">
        <AdminNotice
          saved={params?.saved === "1"}
          message={typeof params?.message === "string" ? params.message : undefined}
        />

        {uploadTargets.map((item) => (
          <AdminCard key={item.target} title={item.title}>
            <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
              <MediaPreview src={item.current} alt={item.title} />
              <form action={uploadMediaAction} className="grid gap-4">
                <input type="hidden" name="bucket" value={item.bucket} />
                <input type="hidden" name="target" value={item.target} />
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-200">Choose file</span>
                  <input
                    type="file"
                    name="file"
                    className="rounded-[14px] border border-white/10 bg-[#092635] px-4 py-3 text-sm text-white"
                  />
                </label>
                <SubmitButton label="Upload and assign" />
              </form>
            </div>
          </AdminCard>
        ))}
      </div>
    </AdminShell>
  );
}
