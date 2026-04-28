import Link from "next/link";
import { BTN_PRIMARY } from "@/lib/btn";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4">404</p>
      <h1 className="font-heading text-5xl sm:text-7xl font-light text-[#f5f0eb] mb-4">
        Page Not Found
      </h1>
      <p className="text-base text-[#f5f0eb]/40 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className={BTN_PRIMARY}>
        Back to home
      </Link>
    </div>
  );
}
