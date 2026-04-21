export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description?: string;
  subServices: string[];
}

export const photographyServices: Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    subtitle: "India's Most Trusted Wedding Photographers",
    description:
      "Your wedding day is one of the most profound chapters of your life — and we're here to ensure every stolen glance, tearful embrace, and joyful dance is preserved forever. Our team of seasoned wedding photographers blends artistry with discretion, capturing both the grandeur of the ceremony and the intimate moments in between.\n\nFrom traditional rituals to modern celebrations, our approach is deeply personal. We invest time in understanding your vision, your families, and your unique story before we ever lift a camera. The result is a wedding album that doesn't just document a day — it tells a story that will move you for decades to come.",
    subServices: [
      "Full Wedding Day Photography",
      "Candid Wedding Photography",
      "Traditional Wedding Photography",
      "Destination Wedding Photography",
      "Engagement Photography",
      "Pre-Wedding Shoot",
      "Haldi Ceremony Photography",
      "Mehendi Ceremony Photography",
      "Reception Photography",
    ],
  },
  {
    slug: "event-photography",
    title: "Event Photography",
    subtitle: "Professional Event Coverage Across India",
    description:
      "Every event tells a story — and great event photography ensures that story lives on. Whether you're hosting an intimate birthday gathering or a large-scale corporate conference, our photographers bring a sharp eye and a light touch, capturing the energy, emotion, and key moments that define your event.\n\nWe understand that events are fast-paced and unpredictable. Our team is trained to move seamlessly through any environment, anticipating moments before they happen and delivering crisp, compelling images that reflect the true spirit of your occasion.\n\nFrom setup to the final toast, we're there for every moment — delivering a complete visual narrative that you can share, publish, and treasure.",
    subServices: [
      "Birthday Party Photography",
      "Corporate Event Photography",
      "Conference Photography",
      "Exhibition Photography",
      "Award Ceremony Photography",
      "College Event Photography",
      "Festival & Cultural Event Photography",
      "Product Launch Event Photography",
    ],
  },
  {
    slug: "portrait-photography",
    title: "Portrait Photography",
    subtitle: "Timeless Portraits That Tell Your Story",
    description:
      "A great portrait is more than a photograph — it's a window into a person's soul. At Magic Frame Studio, we approach every portrait session with patience, artistry, and a deep respect for our subjects. Whether you need polished professional headshots or expressive personal portraits, our team creates images that are authentic, flattering, and beautifully lit.\n\nWe work in studio settings, on location, and in natural light environments to craft portraits tailored to your personality and purpose. Our photographers have a gift for putting people at ease — even the most camera-shy subjects find themselves relaxed and expressive in our care.\n\nFrom individual professionals to full families, from maternity sessions to baby photography, we celebrate every stage and story of life.",
    subServices: [
      "Individual Portraits",
      "Professional Headshots",
      "Couple Photoshoots",
      "Family Photography",
      "Maternity Photography",
      "Baby Photography",
      "Kids Photography",
      "Graduation Photoshoot",
    ],
  },
  {
    slug: "fashion-model-photography",
    title: "Fashion & Model Photography",
    subtitle: "Editorial & Campaign Photography",
    description:
      "In the fashion world, imagery is everything. Our fashion and model photography is crafted to command attention — bold, dynamic, and undeniably compelling. We work with brands, agencies, and individual models to create imagery that speaks to your audience and elevates your visual identity.\n\nFrom high-fashion editorial spreads to commercial lookbooks and social media campaigns, our team combines technical precision with creative vision. We collaborate closely with stylists, art directors, and creative teams to ensure every shot is intentional and impactful.\n\nWhether you're building a model portfolio, launching a new collection, or creating content for a brand campaign, Magic Frame Studio delivers photography that makes an unforgettable impression.",
    subServices: [
      "Model Portfolio Shoot",
      "Fashion Brand Photography",
      "Editorial Photography",
      "Lookbook Photography",
      "Influencer Photoshoots",
    ],
  },
  {
    slug: "product-photography",
    title: "Product Photography",
    subtitle: "High-Impact Visuals for Your Products",
    description:
      "In e-commerce and retail, your product photography is your first — and sometimes only — chance to win a customer. Our product photographers understand the critical role that image quality plays in purchasing decisions, and we approach every shoot with commercial precision and creative flair.\n\nWe specialize in clean white-background shots for marketplaces like Amazon and Flipkart, as well as lifestyle photography that shows your product in context. From intricate jewelry to large furniture pieces, we have the studio space, lighting expertise, and post-production capabilities to make any product shine.\n\nOur turnaround is fast, our quality is uncompromising, and our rates are designed to scale with your catalog — whether you're shooting five products or five hundred.",
    subServices: [
      "E-commerce Product Photography",
      "Amazon / Flipkart Product Photos",
      "Jewelry Photography",
      "Food Photography",
      "Catalog Photography",
      "Lifestyle Product Photography",
    ],
  },
  {
    slug: "corporate-photography",
    title: "Corporate Photography",
    subtitle: "Building Your Brand Through Powerful Imagery",
    description:
      "Your company's visual identity begins with the images you put into the world. Corporate photography from Magic Frame Studio helps businesses project confidence, professionalism, and authenticity — whether for websites, annual reports, investor presentations, or social media.\n\nWe capture the people, places, and culture that make your organization unique. From polished executive headshots to candid office environment shots and team photography, we bring a storytelling approach to every corporate assignment.\n\nWith experience working with startups, SMEs, and large enterprises across India, we understand the demands of the corporate world — and we deliver imagery that matches your brand's ambitions.",
    subServices: [
      "Corporate Headshots",
      "Office Environment Photography",
      "Team Photography",
      "Corporate Branding Photos",
      "Company Profile Photography",
      "Workplace Culture Photography",
    ],
  },
  {
    slug: "real-estate-photography",
    title: "Real Estate Photography",
    subtitle: "Showcase Properties at Their Best",
    description:
      "Great real estate photography sells properties faster and for more. Our architectural and interior photographers use professional lighting, wide-angle lenses, and meticulous composition to present every property in its absolute best light — attracting serious buyers and commanding premium prices.\n\nWe understand the real estate market and know how to highlight the features that matter most: space, light, flow, and unique architectural details. Our images are crisp, bright, and beautifully composed — ready for portals, brochures, and social media.\n\nFrom residential apartments to luxury villas, commercial spaces, hotels, and Airbnb properties, Magic Frame Studio delivers photography that turns browsers into buyers.",
    subServices: [
      "Property Photography",
      "Interior Photography",
      "Architecture Photography",
      "Hotel & Resort Photography",
      "Airbnb Property Photography",
    ],
  },
  {
    slug: "drone-photography",
    title: "Drone Photography",
    subtitle: "Breathtaking Aerial Photography",
    description:
      "See the world from a perspective that was once reserved for birds — and filmmakers with helicopters. Our licensed drone photographers capture breathtaking aerial imagery that transforms ordinary locations into extraordinary visual narratives.\n\nFrom sweeping property aerials to dramatic event coverage and cinematic landscape shots, our drone photography adds a dimension of scale and grandeur that no ground-based camera can match. We operate the latest drone technology with full compliance to DGCA regulations, ensuring safe and legal shoots across India.\n\nWhether you need aerials for real estate listings, event highlights, wedding coverage, or architectural documentation, our team delivers stunning images that elevate your project.",
    subServices: [
      "Aerial Property Photography",
      "Event Drone Photography",
      "Wedding Drone Photography",
      "Landscape Aerial Photography",
    ],
  },
];

export const videographyServices: Service[] = [
  {
    slug: "wedding-videography",
    title: "Wedding Videography",
    subtitle: "Cinematic Wedding Films That Last Forever",
    description:
      "A wedding film is more than a recording — it's a cinematic love story. Our wedding videographers are storytellers first, technicians second. Using cinema-grade cameras, professional audio, and a deeply narrative approach to editing, we craft wedding films that transport you back to the emotion, the music, and the magic of your special day.\n\nWe cover every beat of your wedding — from the nervous excitement of getting ready to the first dance and beyond. Our highlight films are crafted like short movies: paced with intention, set to music that moves you, and edited with the care and attention that your story deserves.\n\nWith hundreds of weddings filmed across India, Magic Frame Studio has the experience and artistry to create a wedding film that will become one of your most treasured possessions.",
    subServices: [
      "Cinematic Wedding Film",
      "Full Wedding Day Video",
      "Pre-Wedding Video",
      "Save The Date Video",
      "Engagement Video",
      "Haldi Ceremony Video",
      "Mehendi Ceremony Video",
      "Reception Video",
      "Wedding Highlights Film",
      "Wedding Teaser Video",
    ],
  },
  {
    slug: "event-videography",
    title: "Event Videography",
    subtitle: "Professional Event Video Coverage",
    description:
      "From the energy of a live concert to the precision of a corporate conference, event videography requires a team that can move fast, think on their feet, and deliver footage that captures the full spirit of the occasion. Magic Frame Studio has years of experience covering events of every scale and type across India.\n\nOur multi-camera setups, professional audio recording, and experienced operators ensure we never miss a key moment — whether it's a speaker's keynote, a heartfelt award presentation, or the spontaneous laughter of a birthday party. We deliver polished, broadcast-quality videos that you can share across all platforms.\n\nFrom concept to delivery, we handle the entire production process — so you can focus on your event while we capture it.",
    subServices: [
      "Birthday Party Video",
      "Corporate Event Video",
      "Conference Video",
      "Exhibition & Trade Show Video",
      "Award Ceremony Video",
      "College Event Video",
      "Cultural Event Video",
      "Product Launch Event Video",
    ],
  },
  {
    slug: "corporate-videography",
    title: "Corporate Videography",
    subtitle: "Elevate Your Brand with Video",
    description:
      "In a world where attention is currency, video is the most powerful investment your brand can make. Our corporate video production team creates polished, professional content that communicates your message with clarity, authority, and visual impact.\n\nFrom company profile films and executive interviews to training videos and office culture documentaries, we bring a cinematic sensibility to every corporate brief. We handle everything — pre-production planning, scripting, shooting, and post-production — delivering a final product that is ready to deploy across your website, social channels, and presentations.\n\nWith experience working with leading Indian companies and multinationals, Magic Frame Studio understands the demands of corporate communication and delivers video content that builds trust and drives results.",
    subServices: [
      "Corporate Company Profile Video",
      "Executive Interview Video",
      "Corporate Event Video",
      "Training & Educational Videos",
      "Office Culture Video",
      "Recruitment Video",
    ],
  },
  {
    slug: "brand-promotional-videos",
    title: "Brand & Promotional Videos",
    subtitle: "Videos That Sell Your Brand",
    description:
      "Your brand has a story — and video is the most powerful way to tell it. Our brand and promotional video production team creates compelling visual narratives that connect with your audience, communicate your values, and drive real business results.\n\nWe work with brands of all sizes — from emerging startups to established enterprises — to produce videos that genuinely move people. Whether it's a punchy 30-second ad, a brand anthem film, or a series of product launch videos, we approach every project with strategic thinking and creative ambition.\n\nFrom concept development and scriptwriting to final delivery in all required formats, Magic Frame Studio is your end-to-end partner for brand video content that makes an impact.",
    subServices: [
      "Brand Promotional Video",
      "Social Media Promotional Videos",
      "Product Advertisement Video",
      "Business Promotional Video",
      "Influencer / Creator Videos",
      "Marketing Campaign Videos",
    ],
  },
  {
    slug: "social-media-video-content",
    title: "Social Media Video Content",
    subtitle: "Short-Form Content That Stops the Scroll",
    description:
      "The social media landscape demands content that is fast, engaging, and authentically on-brand. Our social media video production team specializes in creating short-form content that captures attention in the first second and keeps viewers watching until the end.\n\nWe produce Instagram Reels, YouTube Shorts, behind-the-scenes content, product demos, and creator collaborations — all optimized for the specific formats and algorithms of each platform. We understand what works on social media, and we help brands build a consistent, compelling visual presence that grows their audience.\n\nWhether you need a content creator partnership or a full monthly content calendar, Magic Frame Studio delivers social video content that converts views into followers and followers into customers.",
    subServices: [
      "Instagram Reels",
      "YouTube Videos",
      "Short-form Content",
      "Behind The Scenes Videos",
      "Content Creator Videos",
    ],
  },
  {
    slug: "real-estate-videography",
    title: "Real Estate Videography",
    subtitle: "Make Properties Impossible to Ignore",
    description:
      "Video has become an essential tool in real estate marketing — and properties with professional video content sell faster and at higher prices than those without. Our real estate videographers create cinematic property walkthrough videos that showcase every space in its best possible light.\n\nUsing stabilized cameras, professional lighting, and immersive editing, we guide viewers through your property as if they're walking through it themselves. Every room is presented with care, every unique feature highlighted, and the overall narrative crafted to create an emotional connection with potential buyers.\n\nFrom intimate apartments to sprawling luxury villas, commercial spaces, and boutique hotels, Magic Frame Studio produces real estate videos that set properties apart in a competitive market.",
    subServices: [
      "Property Walkthrough Videos",
      "Interior Videography",
      "Architecture Videos",
      "Hotel & Resort Videos",
      "Airbnb Property Videos",
    ],
  },
  {
    slug: "drone-videography",
    title: "Drone Videography",
    subtitle: "Cinematic Aerial Footage",
    description:
      "Aerial videography adds a cinematic dimension to any project that no ground-based camera can match. Our DGCA-licensed drone videographers capture sweeping, dramatic aerial footage that elevates weddings, real estate, events, and brand content to a truly cinematic level.\n\nUsing the latest professional drone technology with stabilized 4K and 6K cameras, we capture smooth, cinematic aerial sequences that integrate seamlessly with ground-based footage. Our pilots are experienced, safety-conscious, and meticulous in their execution — delivering aerial footage that is breathtaking in quality.\n\nFrom dramatic property aerials to aerial wedding coverage and landscape cinematography, Magic Frame Studio's drone videography service adds the wow factor to any visual project.",
    subServices: [
      "Aerial Wedding Videography",
      "Aerial Property Videos",
      "Event Drone Coverage",
      "Landscape Drone Cinematography",
    ],
  },
];

export const allServices = {
  photography: photographyServices,
  videography: videographyServices,
};
