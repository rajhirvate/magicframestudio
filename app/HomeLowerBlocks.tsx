import LatestBlogSection from "@/components/sections/LatestBlogSection";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import SEOContent, { OurApproachSection } from "@/components/sections/SEOContent";

/** Below-the-fold homepage — static imports avoid a long chain of lazy chunk requests on first load. */
export default function HomeLowerBlocks() {
  return (
    <>
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
