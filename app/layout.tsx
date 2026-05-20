import type { Metadata } from "next";
import {
  Montserrat,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Poppins,
} from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  /** Playfair has no 300 in `next/font/google` metadata; `font-light` maps to 400 in globals. */
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/** Semantic `<h1>` / `<h2>` headings site-wide (see `globals.css`). */
const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/** Loaded for `/hero4` typography comparison only (scoped via `.hero4-page`). */
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magic Frame Studio | Professional Photography & Videography in India",
  description:
    "Magic Frame Studio — India's most trusted photography and videography studio since 2020. Wedding, events, portraits, corporate, product shoots and more.",
  openGraph: {
    title: "Magic Frame Studio | Professional Photography & Videography in India",
    description:
      "India's most trusted photography and videography studio since 2020.",
    type: "website",
    locale: "en_IN",
    siteName: "Magic Frame Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSerif.variable} ${fontSans.variable} ${fontMontserrat.variable} ${fontPoppins.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
