import type { Metadata } from "next";
import HeroSectionHero3 from "@/components/sections/HeroSectionHero3";
import StatsBar from "@/components/sections/StatsBar";
import IntroSection from "@/components/sections/IntroSection";
import PartnersLogoStrip from "@/components/sections/PartnersLogoStrip";
import ServicesOverview from "@/components/sections/ServicesOverview";
import MagicFrameDifferenceSection from "@/components/sections/MagicFrameDifferenceSection";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import SuccessStoriesMarquee from "@/components/sections/SuccessStoriesMarquee";
import LatestBlogSection from "@/components/sections/LatestBlogSection";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";

export const metadata: Metadata = {
  title: "Hero 4 | Magic Frame Studio",
  description: "Magic Frame Studio — alternative homepage layout.",
  robots: { index: false, follow: true },
};

export default function Hero4Page() {
  return (
    <div className="hero3-page hero4-page">
      <HeroSectionHero3 />
      <StatsBar />
      <IntroSection />
      <PartnersLogoStrip />
      <ServicesOverview />
      <ReadyToConnectSection />
      <OurApproachSection />
      <PortfolioPreview />
      <SuccessStoriesMarquee />
      <SEOContent />
      <MagicFrameDifferenceSection />
      <LatestBlogSection />
      <FAQSection />
    </div>
  );
}
