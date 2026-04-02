import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Magic Frame Studio — Book a Shoot in India",
  description:
    "Get in touch with Magic Frame Studio for professional photography and videography services in India. Book a shoot, request a quote, or ask us anything.",
  openGraph: {
    title: "Contact Magic Frame Studio",
    description:
      "Book a professional photography or videography shoot with Magic Frame Studio across India.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
