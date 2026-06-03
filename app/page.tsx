import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroSectionHero3 from "@/components/sections/HeroSectionHero3";
import StatsBar from "@/components/sections/StatsBar";

const HomeBelowFold = dynamic(() => import("@/components/home/HomeBelowFold"), {
  loading: () => <div className="min-h-[40vh]" aria-hidden />,
});

const LatestBlogSection = dynamic(
  () => import("@/components/sections/LatestBlogSection"),
  { loading: () => null },
);

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
      <link
        rel="preload"
        href="/images/hero-home.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />
      <HeroSectionHero3 />
      <StatsBar />
      <Suspense fallback={<div className="min-h-[40vh]" aria-hidden />}>
        <HomeBelowFold />
      </Suspense>
      <Suspense fallback={null}>
        <LatestBlogSection />
      </Suspense>
    </div>
  );
}
