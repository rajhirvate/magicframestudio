import { Poppins } from "next/font/google";

/** Loaded only for `/hero4` typography (see `.hero4-page` in globals.css). */
const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export default function Hero4Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={fontPoppins.variable}>{children}</div>;
}
