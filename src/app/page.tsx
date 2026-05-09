import { getManagedContent } from "@/lib/managed-content";
import { HomeDesktopPage } from "@/features/home/desktop/HomeDesktopPage";
import { HomeMobilePage } from "@/mobile/home/HomeMobilePage";

export default async function HomePage() {
  const content = await getManagedContent();

  return (
    <>
      <div className="block lg:hidden">
        <HomeMobilePage content={content} />
      </div>
      <div className="hidden lg:block">
        <HomeDesktopPage content={content} />
      </div>
    </>
  );
}
