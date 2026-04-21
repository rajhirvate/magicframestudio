import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const StatsBar = dynamic(() => import("@/components/sections/StatsBar"));
const IntroSection = dynamic(() => import("@/components/sections/IntroSection"));
const ServicesOverview = dynamic(() => import("@/components/sections/ServicesOverview"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const WeddingServiceHighlights = dynamic(() =>
  import("@/components/sections/WeddingServiceHighlights")
);
const ReadyToConnectSection = dynamic(() =>
  import("@/components/sections/ReadyToConnectSection")
);
const PortfolioPreview = dynamic(() => import("@/components/sections/PortfolioPreview"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

const OurApproachSection = dynamic(() =>
  import("@/components/sections/SEOContent").then((mod) => ({
    default: mod.OurApproachSection,
  }))
);

const SEOContent = dynamic(() => import("@/components/sections/SEOContent"));

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
