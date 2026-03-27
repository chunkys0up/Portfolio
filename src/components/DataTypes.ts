export interface CardData {
  title: string;
  date: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

export const horizontalGallery: string[] = [
  "/Portfolio/gallery/acm_meeting_1.jpg",
  "/Portfolio/gallery/acm_meeting_2.jpg",
  "/Portfolio/gallery/acm_meeting_3.jpg",
  "/Portfolio/gallery/bitesafe_1.png",
  "/Portfolio/gallery/bitesafe_2.png",
  "/Portfolio/gallery/bitesafe_3.jpg",
  "/Portfolio/thumbnails/cloud-metrics.png",
  "/Portfolio/thumbnails/track-site.jpg",
];

export const experience: CardData[] = [
  {
    title: "Open Food Facts",
    date: "2026 - Present",
    image: "",
    link: "",
    description: "Contributing to Open Food Facts Database and Open Source",
    tags: [],
  },
  {
    title: "ACM at CSUF Algo Board",
    date: "2026 - Present",
    image: "",
    link: "",
    description:
      "Teaching algorithms and data structures through live problem-solving to help peers prepare for technical interviews",
    tags: [],
  },
  {
    title: "CSUF ICPC Competitor",
    date: "2025 - Present",
    image: "",
    link: "",
    description:
      "Teaching algorithms and data structures through live problem-solving to help peers prepare for technical interviews",
    tags: [],
  },
];

export const projects: CardData[] = [
  {
    title: "Note-Glance",
    date: "2025-2026",
    image: "",
    link: "https://github.com/chunkys0up/note-glance",
    description: "Obsidian Plugin that adds file preview to search",
    tags: ["svelte", "TypeScript", "Obsidian API"],
  },
  {
    title: "Cloud Metrics Dashboard",
    date: "2025",
    image: "/Portfolio/thumbnails/cloud-metrics.png",
    link: "https://github.com/chunkys0up/Cloud-Metrics-Dashboard",
    description:
      "Real time cloud monitoring dashboard with live metrics and historical analysis",
    tags: ["React", "Vite", "TypeScript", "Go", "Redis", "Shell"],
  },
  {
    title: "Track Site (Irvine Hacks 2026)",
    date: "2025",
    image: "/Portfolio/thumbnails/track-site.jpg",
    link: "https://devpost.com/software/track-site",
    description:
      "Lead a team to build vehicle telemetry dashboard, and integrated Arduino based censors to process real car data",
    tags: ["React", "JavaScript", "Arduino"],
  },
  {
    title: "BiteSafe (BeacHacks 2025)",
    date: "2025",
    image: "/Portfolio/thumbnails/bite-safe.jpg",
    link: "https://devpost.com/software/bitesafe",
    description:
      "Co-developed a full stack mobile application to detect food allergens and recommend safe restaurants",
    tags: ["React Native", "Supabase"],
  },
  {
    title: "Web Crawler",
    date: "2025",
    image: "",
    link: "https://github.com/chunkys0up/Web-Crawler",
    description:
      "Concurrent web crawler in Go to scrape and index Wikipedia article metadata",
    tags: ["Go", "PostgreSQL", "Docker"],
  },
  {
    title: "Redis from Scratch",
    date: "2025",
    image: "",
    link: "https://github.com/chunkys0up/Redis-from-scratch",
    description: "Implemented a Redis by stratch using c++",
    tags: ["C++", "Shell"],
  },
];
