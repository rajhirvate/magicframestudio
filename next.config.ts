import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  /** Fewer modules to trace in dev/build when using barrel-heavy packages */
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    /** Cache optimized images longer at the CDN edge (default is short). */
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "zerogravity.photography",
      },
      {
        protocol: "https",
        hostname: "www.focuzstudios.in",
      },
    ],
    formats: ["image/avif", "image/webp"],
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
      /**
       * Only extend `ignored` when we can merge plain strings without dropping
       * Next/webpack defaults. Replacing with `extraIgnores` alone would stop
       * ignoring `node_modules` and can exhaust file watchers (EMFILE) or hang dev.
       *
       * When `ignored` is still unset here, leave it alone so Next can apply its
       * defaults; only debounce rebuilds.
       */
      /**
       * When webpack never set `ignored`, still ignore heavy folders so watcher
       * work stays bounded (helps `npm run dev:webpack`).
       */
      if (prev === undefined) {
        config.watchOptions = {
          ...config.watchOptions,
          ignored: ["**/node_modules/**", ...extraIgnores],
          aggregateTimeout: 400,
        };
      } else if (typeof prev === "string" && prev.length > 0) {
        config.watchOptions = {
          ...config.watchOptions,
          ignored: [prev, ...extraIgnores],
          aggregateTimeout: 400,
        };
      } else if (Array.isArray(prev)) {
        const hasOnlyStringIgnores = prev.every(
          (item) => typeof item === "string" && item.length > 0,
        );
        if (hasOnlyStringIgnores) {
          config.watchOptions = {
            ...config.watchOptions,
            ignored: [...prev, ...extraIgnores],
            aggregateTimeout: 400,
          };
        } else {
          config.watchOptions = {
            ...config.watchOptions,
            aggregateTimeout: 400,
          };
        }
      } else {
        config.watchOptions = {
          ...config.watchOptions,
          aggregateTimeout: 400,
        };
      }
    }
    return config;
  },
};

export default nextConfig;
