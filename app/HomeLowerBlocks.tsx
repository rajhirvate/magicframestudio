import dynamic from "next/dynamic";

/** Below-the-fold homepage slices — split into separate chunks so initial JS stays smaller. */
const ReadyToConnectSection = dynamic(
  () => import("@/components/sections/ReadyToConnectSection"),
);
const OurApproachSection = dynamic(() =>
  import("@/components/sections/SEOContent").then((m) => ({
    default: m.OurApproachSection,
  })),
);
const PortfolioPreview = dynamic(
  () => import("@/components/sections/PortfolioPreview"),
);
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const CTABanner = dynamic(() => import("@/components/sections/CTABanner"));
const SEOContent = dynamic(() => import("@/components/sections/SEOContent"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));

export default function HomeLowerBlocks() {
  return (
    <>
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
