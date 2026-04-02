import type { Metadata } from "next";
import { videographyServices } from "@/data/services";
import ServiceHubPage from "@/components/sections/ServiceHubPage";

export const metadata: Metadata = {
  title: "Videography Services in India | Magic Frame Studio",
  description:
    "Explore all professional videography services by Magic Frame Studio — wedding films, events, corporate, brand, social media, real estate, and drone videography across India.",
  openGraph: {
    title: "Videography Services in India | Magic Frame Studio",
    description:
      "Professional videography services across India since 2020. Weddings, events, brand films, social media content, and more.",
    type: "website",
  },
};

export default function VideographyPage() {
  return (
    <ServiceHubPage
      category="videography"
      services={videographyServices}
      title="Professional Videography Services in India"
      subtitle="Cinematic storytelling through motion — for every occasion and brand."
      description="Magic Frame Studio creates video content that doesn't just document — it resonates. From sweeping cinematic wedding films to high-impact brand videos and short-form social content, our videography team combines technical mastery with creative vision to produce work that truly moves audiences."
    />
  );
}
