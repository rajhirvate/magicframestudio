import InstagramReelsSection from "@/components/sections/InstagramReelsSection";

/**
 * Home horizontal strip — Instagram reel embeds + link to full reels tab.
 * Reel URLs: `data/instagramReelsConfig.ts`.
 */
export default function MagicFrameDifferenceSection() {
  return (
    <section
      id="magic-frame-difference"
      className="relative scroll-mt-24 bg-[#0a0a0a]"
      aria-label="Instagram reels"
    >
      <InstagramReelsSection />
    </section>
  );
}
