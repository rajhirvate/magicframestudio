import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  /**
   * Dev-only: allow HMR / devtools when the browser uses a different host than
   * the one Next guessed (e.g. 127.0.0.1 vs localhost, LAN IP, or embedded preview).
   */
  allowedDevOrigins: ["localhost", "127.0.0.1"],
};

export default nextConfig;
