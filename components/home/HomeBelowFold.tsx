import dynamic from "next/dynamic";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";
import { OurApproachSection } from "@/components/sections/SEOContent";

const IntroSection = dynamic(
  () => import("@/components/sections/IntroSection"),
  { loading: () => <div className="min-h-[22rem] border-t border-stone-200 bg-white" aria-hidden /> },
);
const ServicesOverview = dynamic(
  () => import("@/components/sections/ServicesOverview"),
  { loading: () => <div className="min-h-[28rem] bg-white" aria-hidden /> },
);
const PortfolioPreview = dynamic(
  () => import("@/components/sections/PortfolioPreview"),
  { loading: () => <div className="min-h-[28rem]" aria-hidden /> },
);
const SuccessStoriesMarquee = dynamic(
  () => import("@/components/sections/SuccessStoriesMarquee"),
  { loading: () => <div className="min-h-[20rem]" aria-hidden /> },
);
const SEOContent = dynamic(() => import("@/components/sections/SEOContent"), {
  loading: () => <div className="min-h-[12rem]" aria-hidden />,
});
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), {
  loading: () => <div className="min-h-[16rem]" aria-hidden />,
});

/** Below-the-fold homepage sections — server shell + lazy client chunks. */
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
