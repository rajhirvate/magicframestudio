import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";

const IntroSection = dynamic(() => import("@/components/sections/IntroSection"));
const ServicesOverview = dynamic(
  () => import("@/components/sections/ServicesOverview"),
);
const StudioEditorialSplit = dynamic(
  () => import("@/components/sections/StudioEditorialSplit"),
);
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));

const HomeLowerBlocks = dynamic(() => import("./HomeLowerBlocks"), {
  loading: () => null,
});

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
      <StudioEditorialSplit />
      <WhyChooseUs />
      <HomeLowerBlocks />
    </>
  );
}
