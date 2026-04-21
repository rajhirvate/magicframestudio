import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import IntroSection from "@/components/sections/IntroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WeddingServiceHighlights from "@/components/sections/WeddingServiceHighlights";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";

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
      <HeroSection />
      <StatsBar />
      <IntroSection />
      <ServicesOverview />
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
