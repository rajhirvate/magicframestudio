import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import StudioEditorialSplit from "@/components/sections/StudioEditorialSplit";

/** Mid-page fold (Intro + services + editorial). */
export default function HomePageMid() {
  return (
    <>
      <IntroSection />
      <ServicesOverview />
      <StudioEditorialSplit />
    </>
  );
}
