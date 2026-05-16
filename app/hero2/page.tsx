import type { Metadata } from "next";
import HeroSectionGlass from "@/components/sections/HeroSectionGlass";
import StatsBar from "@/components/sections/StatsBar";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WeddingServiceHighlights from "@/components/sections/WeddingServiceHighlights";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import LatestBlogSection from "@/components/sections/LatestBlogSection";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";

export const metadata: Metadata = {
  title: "Hero alternate layout | Magic Frame Studio",
  description:
    "Alternate homepage hero — Magic Frame Studio, professional photography and videography in India.",
};

export default function Hero2Page() {
  return (
    <>
      <HeroSectionGlass />
      <StatsBar />
      <IntroSection />
      <ServicesOverview />
      <WeddingServiceHighlights />
      <ReadyToConnectSection />
      <OurApproachSection />
      <PortfolioPreview />
      <Testimonials />
      <CTABanner />
      <SEOContent />
      <LatestBlogSection />
      <FAQSection />
    </>
  );
}
