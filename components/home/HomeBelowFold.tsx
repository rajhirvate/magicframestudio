"use client";

import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import SuccessStoriesMarquee from "@/components/sections/SuccessStoriesMarquee";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, {
  OurApproachSection,
} from "@/components/sections/SEOContent";

/** Below-the-fold homepage sections loaded in a separate chunk for faster `/` compilation. */
export default function HomeBelowFold() {
  return (
    <>
      <IntroSection />
      <ServicesOverview />
      <ReadyToConnectSection />
      <OurApproachSection />
      <PortfolioPreview />
      <SuccessStoriesMarquee />
      <SEOContent />
      <FAQSection />
    </>
  );
}
