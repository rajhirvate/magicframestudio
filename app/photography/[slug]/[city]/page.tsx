import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { photographyServices } from "@/data/services";
import { locations, getLocation } from "@/data/locations";
import ServiceCityPageLayout from "@/components/sections/ServiceCityPageLayout";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  return photographyServices.flatMap((service) =>
    locations.map((loc) => ({
      slug: service.slug,
      city: loc.slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city } = await params;
  const service = photographyServices.find((s) => s.slug === slug);
  const location = getLocation(city);
  if (!service || !location) return {};

  const title = `${service.title} in ${location.label} | Magic Frame Studio`;
  const description = `Looking for the best ${service.title.toLowerCase()} in ${location.label}? Magic Frame Studio offers professional, cinematic ${service.title.toLowerCase()} services in ${location.label}, ${location.state}. Trusted by thousands across India since 2020.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    alternates: {
      canonical: `/photography/${slug}/${city}`,
    },
  };
}

export default async function PhotographyCityPage({ params }: Props) {
  const { slug, city } = await params;
  const service = photographyServices.find((s) => s.slug === slug);
  const location = getLocation(city);

  if (!service || !location) notFound();

  return (
    <ServiceCityPageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={
        service.description ||
        `Magic Frame Studio delivers exceptional ${service.title.toLowerCase()} services in ${location.label}. Our professional team combines technical mastery with creative storytelling to craft images that truly matter.`
      }
      subServices={service.subServices}
      category="photography"
      slug={service.slug}
      location={location}
    />
  );
}
