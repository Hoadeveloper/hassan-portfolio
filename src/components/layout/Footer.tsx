import { QuickContactList } from "@/components/contact/QuickContactList";
import { Container } from "@/components/layout/Container";
import { getManagedContent } from "@/lib/managed-content";

export async function Footer() {
  const content = await getManagedContent();

  return (
    <footer className="border-t border-white/8 bg-slate-950/40 py-10">
      <Container className="grid gap-6 text-sm text-slate-400 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.8fr)] sm:items-end sm:gap-10">
        <div className="max-w-2xl space-y-2.5">
          <p className="text-sm font-medium tracking-[0.03em] text-slate-200">{content.site.name}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-400/95">
            {content.navigation.footerIntro}
          </p>
        </div>
        <div className="max-w-md space-y-2.5 text-left sm:justify-self-end sm:text-right">
          <p className="leading-6 text-slate-300">{content.site.availability}</p>
          <p className="leading-6 text-slate-500">{content.navigation.footerBuiltWith}</p>
          <QuickContactList items={content.site.quickContacts.slice(0, 4)} mode="footer" />
        </div>
      </Container>
    </footer>
  );
}
