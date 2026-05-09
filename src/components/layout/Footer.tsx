import { QuickContactList } from "@/components/contact/QuickContactList";
import { Container } from "@/components/layout/Container";
import { getManagedContent } from "@/lib/managed-content";

export async function Footer() {
  const content = await getManagedContent();
  const socialContacts = content.site.quickContacts.filter((item) =>
    ["email", "github", "linkedin", "telegram"].includes(item.kind),
  );

  return (
    <footer className="border-t border-white/8 bg-slate-950/40 py-6">
      <Container className="flex justify-center text-sm text-slate-400">
        <QuickContactList items={socialContacts} mode="footer" />
      </Container>
    </footer>
  );
}
