import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSectionHero3 from "@/components/sections/HeroSectionHero3";
import StatsBar from "@/components/sections/StatsBar";
import LatestBlogSection from "@/components/sections/LatestBlogSection";

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
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
    <div className="hero3-page">
      <HeroSectionHero3 />
      <StatsBar />
      <HomeBelowFold />
      <Suspense fallback={null}>
        <LatestBlogSection />
      </Suspense>
    </div>
  );
}
