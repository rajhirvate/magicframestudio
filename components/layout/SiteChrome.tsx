"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalNav = pathname === "/hero2";
  /** Scope `.hero4-page` to chrome + main so nav/footer inherit Poppins tokens (see globals.css). */
  const hero4Page = pathname === "/hero4";

  return (
    <div
      className={cn("flex min-h-full flex-1 flex-col", hero4Page && "hero4-page")}
    >
      {!hideGlobalNav ? <Navbar /> : null}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
