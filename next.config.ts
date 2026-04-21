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
    /** Tree-shake icon and motion barrels so client bundles stay smaller in dev and prod. */
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  /**
   * Dev-only: allow HMR / devtools when the browser uses a different host than
   * the one Next guessed (e.g. 127.0.0.1 vs localhost, LAN IP, or embedded preview).
   */
  allowedDevOrigins: ["localhost", "127.0.0.1"],

  webpack: (config, { dev }) => {
    if (dev) {
      const extraIgnores = [
        "**/_push_repo/**",
        "**/.cursor/**",
        "**/.git/**",
      ];
      const prev = config.watchOptions?.ignored;
      /** Webpack dev schema expects `ignored` arrays to be non-empty glob strings only (not RegExp/functions). */
      const ignored = (() => {
        if (prev === undefined) return extraIgnores;
        if (typeof prev === "function" || prev instanceof RegExp)
          return extraIgnores;
        if (typeof prev === "string" && prev.length > 0)
          return [prev, ...extraIgnores];
        if (Array.isArray(prev)) {
          const valid = prev.filter(
            (item): item is string =>
              typeof item === "string" && item.length > 0,
          );
          return [...valid, ...extraIgnores];
        }
        return extraIgnores;
      })();
      config.watchOptions = {
        ...config.watchOptions,
        ignored,
        /** Debounce rapid saves so the dev overlay does not sit on "Compiling…". */
        aggregateTimeout: 400,
      };
    }
    return config;
  },
};

export default nextConfig;
