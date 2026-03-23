export interface CardData {
  title: string;
  date: string;
  image: string;
  link: string;
  description: string;
  tags: string[];
}

export const horizontalGallery: string[] = [
  "https://plus.unsplash.com/premium_photo-1681412205156-bb506a4ea970?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1772475385350-d130ebe22bf5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1771150473820-37128024ac31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773060897328-9091387ec521?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1772733694354-3b4a33568ef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc2fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1741805870438-457e1b6eaa39?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDR8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1675714692786-22ad175c9a76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1773904215693-934764345e52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
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
