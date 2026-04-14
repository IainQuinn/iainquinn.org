export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "wip" | "archived";
  category: "software" | "hardware" | "science" | "research";
}

export const projects: Project[] = [
  {
    id: "cheminformatics-placeholder-1",
    title: "ChemToolkit.com",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Python", "RDKit", "Cheminformatics"],
    status: "live",
    category: "science",
  },
  {
    id: "portfolio",
    title: "iainquinn.org",
    description:
      "This portfolio site. Built with React, TypeScript, and Mantine UI. Styled with an 8-bit scientific aesthetic.",
    longDescription: `This site is the thing you're looking at right now. Built with React 19, TypeScript, Vite, and Mantine UI v8. The design uses a retro 8-bit scientific aesthetic — pixel fonts, phosphor green accents, and a grid background — to reflect the intersection of code and science that defines my work.\n\nDeployed automatically to GitHub Pages via GitHub Actions on every push to main.`,
    tags: ["React", "TypeScript", "Mantine", "Vite", "GitHub Actions"],
    date: "Apr 2026",
    liveUrl: "https://iainquinn.org",
    status: "live",
    category: "software",
  },

  {
    id: "hardware-placeholder-3",
    title: "Project TBC",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Hardware", "Embedded"],
    status: "wip",
    category: "hardware",
  },
  {
    id: "simulating-solvation",
    title: "Simulating Solvation",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Python", "RISM Theory", "Molecular Simulation"],
    status: "wip",
    category: "research",
  },
  {
    id: "research-placeholder-3",
    title: "Project TBC",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Python", "Science"],
    status: "wip",
    category: "research",
  },
  {
    id: "zinc-fractals",
    title: "Zinc Fractals",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Python", "NumPy", "Electrochemistry"],
    status: "wip",
    category: "research",
  },
  {
    id: "software-placeholder-3",
    title: "Auto DVD Ripper",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Python", "TypeScript"],
    status: "wip",
    category: "software",
  },
  {
    id: "esp32-soil-moisture-sensor",
    title: "Wireless Soil Moisture Sensor",
    description:
      "Custom PCB for a wireless ESP32-based soil moisture sensor. Reads soil conditions and transmits data over WiFi.",
    longDescription: `A custom-designed PCB built around the ESP32 microcontroller for monitoring soil moisture wirelessly. The sensor reads soil conditions and transmits data over WiFi, making it suitable for remote garden or greenhouse monitoring.\n\n[ Placeholder — update with full details, schematic links, and GitHub repo when ready. ]`,
    date: "Mar 2026",
    tags: ["ESP32", "PCB Design", "Hardware", "WiFi", "Embedded"],
    status: "wip",
    category: "hardware",
  },
  {
    id: "hardware-placeholder-2",
    title: "Mini Fume Extractor",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    date: "Jan 2026",
    tags: ["Hardware", "PCB Design", "Embedded"],
    status: "wip",
    category: "hardware",
  },
];
