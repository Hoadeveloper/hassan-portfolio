import { HomeArrivalSection } from "@/features/home/HomeArrivalSection";
import { HomeApproachSection } from "@/features/home/HomeApproachSection";
import { HomeCapabilitiesSection } from "@/features/home/HomeCapabilitiesSection";
import { HomeStackSection } from "@/features/home/HomeStackSection";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { getManagedContent } from "@/lib/managed-content";

const sharedSectionContainerClass =
  "h-full w-full max-w-[80rem] pt-4 pb-1 sm:pt-6 sm:pb-2";

export default async function HomePage() {
  const content = await getManagedContent();

  return (
    <div className="home-page-stack">
      <section className="home-page-screen relative flex items-stretch justify-center overflow-hidden">
        <Container className={sharedSectionContainerClass}>
          <Card className="home-screen-frame relative h-full w-full overflow-hidden px-8 py-7 sm:px-10 sm:py-8 lg:px-14 lg:py-9">
            <HomeArrivalSection {...content.home.section1} profileImage={content.media.profileImage} />
          </Card>
        </Container>
      </section>

      <section className="home-page-screen relative flex items-stretch justify-center overflow-hidden">
        <Container className={sharedSectionContainerClass}>
          <Card className="home-screen-frame relative h-full w-full overflow-hidden px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-[3.25rem]">
            <HomeApproachSection {...content.home.section2} />
          </Card>
        </Container>
      </section>

      <section className="home-page-screen relative flex items-stretch justify-center overflow-hidden">
        <Container className={sharedSectionContainerClass}>
          <Card className="home-screen-frame relative h-full w-full overflow-hidden px-8 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10">
            <HomeCapabilitiesSection {...content.home.section3} />
          </Card>
        </Container>
      </section>

      <section className="home-page-screen relative flex items-stretch justify-center overflow-hidden">
        <Container className={sharedSectionContainerClass}>
          <Card className="home-screen-frame relative h-full w-full overflow-hidden px-8 py-7 sm:px-10 sm:py-8 lg:px-14 lg:py-8">
            <HomeStackSection {...content.home.section4} />
          </Card>
        </Container>
      </section>
    </div>
  );
}
