import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Magic Frame Studio | Photography & Videography Since 2020",
  description:
    "Learn about Magic Frame Studio — India's most trusted photography and videography studio since 2020. Our story, our team, and our creative philosophy.",
  openGraph: {
    title: "About Magic Frame Studio",
    description:
      "India's most trusted photography and videography studio since 2020.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
