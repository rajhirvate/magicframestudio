import type { Metadata } from "next";
import { photographyServices } from "@/data/services";
import ServiceHubPage from "@/components/sections/ServiceHubPage";

export const metadata: Metadata = {
  title: "Photography Services in India | Magic Frame Studio",
  description:
    "Explore all professional photography services by Magic Frame Studio — wedding, events, portraits, fashion, product, corporate, real estate, and drone photography across India.",
  openGraph: {
    title: "Photography Services in India | Magic Frame Studio",
    description:
      "Professional photography services across India since 2020. Weddings, events, portraits, products, and more.",
    type: "website",
  },
};

export default function PhotographyPage() {
  return (
    <ServiceHubPage
      category="photography"
      services={photographyServices}
      title="Professional Photography Services in India"
      subtitle="Cinematic, editorial photography for every occasion and purpose."
      description="From intimate weddings to large-scale corporate campaigns, Magic Frame Studio delivers photography that moves people. Our team of professional photographers brings artistry, precision, and passion to every assignment — crafting images that are as timeless as the moments they capture."
    />
  );
}
