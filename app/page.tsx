import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import HomeLowerBlocks from "./HomeLowerBlocks";
import HomePageMid from "./HomePageMid";

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
      <HomePageMid />
      <HomeLowerBlocks />
    </>
  );
}
