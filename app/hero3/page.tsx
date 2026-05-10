import type { Metadata } from "next";
import HeroSectionHero3 from "@/components/sections/HeroSectionHero3";
import StatsBar from "@/components/sections/StatsBar";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import MagicFrameDifferenceSection from "@/components/sections/MagicFrameDifferenceSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WeddingServiceHighlights from "@/components/sections/WeddingServiceHighlights";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";

export const metadata: Metadata = {
  title: "Hero editorial layout | Magic Frame Studio",
  description:
    "Alternate homepage hero — editorial cover layout with full-width photography. Magic Frame Studio, India.",
};

export default function Hero3Page() {
  return (
    <>
      <HeroSectionHero3 />
      <StatsBar />
      <IntroSection />
      <ServicesOverview />
      <MagicFrameDifferenceSection />
      <WhyChooseUs />
      <WeddingServiceHighlights />
      <ReadyToConnectSection />
      <OurApproachSection />
      <PortfolioPreview />
      <Testimonials />
      <CTABanner />
      <SEOContent />
      <FAQSection />
    </>
  );
}
