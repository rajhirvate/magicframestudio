/**
 * Success stories marquee — edit this file to change **photos, names, subtitles, and reviews**.
 *
 * **Image (`image`)**
 * - Local: add JPG/PNG/WebP under `public/` (e.g. `public/testimonials/meera.jpg`), then set
 *   `image: "/testimonials/meera.jpg"`.
 * - Remote: paste a full `https://...` URL (your CDN, etc.). Allowed hosts must be listed in `next.config.ts` (`images.remotePatterns`).
 *
 * **`review`** — the quote text shown on the card body.
 *
 * **`subtitle`** — one line under the name (city, role, project type).
 *
 * Rows slide in opposite directions: `SUCCESS_STORIES_MARQUEE_ROW_A`, `SUCCESS_STORIES_MARQUEE_ROW_B`.
 */

export type SuccessStory = {
  /** Main testimonial / review copy */
  review: string;
  /** Person’s name as you want it to appear */
  name: string;
  /** Appears below the name (e.g. “Wedding clients · Delhi”) */
  subtitle: string;
  /** Portrait URL: `/path/from/public.jpg` or `https://...` */
  image: string;
  /** Optional: screen-reader alt; defaults to “Photo of {name}” if omitted */
  imageAlt?: string;
};

/** Top strip (scrolls one direction). */
export const SUCCESS_STORIES_MARQUEE_ROW_A: SuccessStory[] = [
  {
    review:
      "With Magic Frame, our two-day wedding coverage felt calm and cinematic. They never rushed a ritual, and every album spread still makes our parents emotional.",
    name: "Priya & Rahul Sharma",
    subtitle: "Wedding clients · Delhi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Our product listings finally match the quality of the pieces. Lighting, colour fidelity, and restraint in retouching — that alone paid for the shoot in a month.",
    name: "Nisha Patel",
    subtitle: "Jewellery brand owner · Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "From storyboard to codec handoff, they treated our brand film like a theatrical release. Transparent milestones, zero chaos on set.",
    name: "Aakash Mehta",
    subtitle: "Marketing lead · Mumbai",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Corporate headshots that don’t look like yearbook photos — our entire leadership page was refreshed in one tight half-day block.",
    name: "Karishma Sen",
    subtitle: "People operations · Bengaluru",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Drone + ground team arrived with a shared shot list. Hospitality marketing finally has B-roll that doesn’t feel stock.",
    name: "Vikram Dutta",
    subtitle: "Resort marketing · Goa",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Editorial campaign across three cities, one colour pipeline. Our global team approved files with almost no revision rounds.",
    name: "Sana Khurana",
    subtitle: "Creative director · Pune",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop&auto=format",
  },
];

/** Bottom strip (scrolls the opposite direction). */
export const SUCCESS_STORIES_MARQUEE_ROW_B: SuccessStory[] = [
  {
    review:
      "They walked the venue the night before our conference, mapped light paths, and delivered highlight cuts before we flew out — rare discipline.",
    name: "Imran Qureshi",
    subtitle: "Event producer · Hyderabad",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Real estate walkthroughs finally feel premium. Twilights, pacing, and LUTs stayed consistent across sixteen inventory homes.",
    name: "Ananya Bose",
    subtitle: "Brokerage partner · Kolkata",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Social-first verticals in batch without losing skin tones. Our beauty brand finally has a look that travels across platforms.",
    name: "Leela Thomas",
    subtitle: "Brand lead · Kochi",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Fashion week backstage is chaos — their crew moved like a single unit. Delivered selects before the last model left the venue.",
    name: "Dev Malhotra",
    subtitle: "Label founder · Mumbai",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Food styling plus motion in one sprint. Packaging team signed off plates that still look irresistible months later on retail screens.",
    name: "Ritu Menon",
    subtitle: "F&B marketing · Chennai",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a41b?w=128&h=128&fit=crop&auto=format",
  },
  {
    review:
      "Documentary coverage on a factory floor isn’t glamour work — they made our safety story humane and watchable.",
    name: "Gaurav Sinha",
    subtitle: "CSR lead · Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop&auto=format",
  },
];
