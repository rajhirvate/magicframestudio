import type { Metadata } from "next";
import HeroSectionHero3 from "@/components/sections/HeroSectionHero3";
import StatsBar from "@/components/sections/StatsBar";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import SuccessStoriesMarquee from "@/components/sections/SuccessStoriesMarquee";
import LatestBlogSection from "@/components/sections/LatestBlogSection";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";
import MagicFrameDifferenceSection from "@/components/sections/MagicFrameDifferenceSection";

export const metadata: Metadata = {
  title: "Magic Frame Studio | Professional Photography & Videography in India",
  description:
    "India's most trusted photography and videography studio since 2020. Wedding, events, portraits, corporate, product shoots and more. 42,540+ happy customers.",
  openGraph: {
    title: "Magic Frame Studio | Professional Photography & Videography in India",
    description:
      "India's most trusted photography and videography studio since 2020.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSectionHero3 />
      <StatsBar />
      <IntroSection />
      <ServicesOverview />
      <ReadyToConnectSection />
      <OurApproachSection />
      <PortfolioPreview />
      <SuccessStoriesMarquee />
      <SEOContent />
      <MagicFrameDifferenceSection />
      <LatestBlogSection />
      <FAQSection />
    </>
  );
}
