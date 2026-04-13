export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "live" | "wip" | "archived";
  category: "software" | "hardware" | "science";
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "iainquinn.org",
    description:
      "This portfolio site. Built with React, TypeScript, and Mantine UI. Styled with an 8-bit scientific aesthetic.",
    longDescription: `This site is the thing you're looking at right now. Built with React 19, TypeScript, Vite, and Mantine UI v8. The design uses a retro 8-bit scientific aesthetic — pixel fonts, phosphor green accents, and a grid background — to reflect the intersection of code and science that defines my work.\n\nDeployed automatically to GitHub Pages via GitHub Actions on every push to main.`,
    tags: ["React", "TypeScript", "Mantine", "Vite", "GitHub Actions"],
    liveUrl: "https://iainquinn.org",
    status: "live",
    category: "software",
  },
  {
    id: "cheminformatics-placeholder-1",
    title: "Project Alpha",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    tags: ["Python", "RDKit", "Cheminformatics"],
    status: "wip",
    category: "science",
  },
  {
    id: "cheminformatics-placeholder-2",
    title: "Project Beta",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    tags: ["TypeScript", "React", "FastAPI"],
    status: "wip",
    category: "software",
  },
  {
    id: "science-placeholder-3",
    title: "Project Gamma",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    tags: ["Python", "NumPy", "RISM Theory"],
    status: "wip",
    category: "science",
  },
  {
    id: "esp32-soil-moisture-sensor",
    title: "Wireless Soil Moisture Sensor",
    description:
      "Custom PCB for a wireless ESP32-based soil moisture sensor. Reads soil conditions and transmits data over WiFi.",
    longDescription: `A custom-designed PCB built around the ESP32 microcontroller for monitoring soil moisture wirelessly. The sensor reads soil conditions and transmits data over WiFi, making it suitable for remote garden or greenhouse monitoring.\n\n[ Placeholder — update with full details, schematic links, and GitHub repo when ready. ]`,
    tags: ["ESP32", "PCB Design", "Hardware", "WiFi", "Embedded"],
    status: "wip",
    category: "hardware",
  },
  {
    id: "hardware-placeholder-2",
    title: "Hardware Project 2",
    description:
      "[ Placeholder — add your project title and description here. ]",
    longDescription: `This is a placeholder project card. Replace this content with a real project description.\n\nEdit src/data/projects.ts to update the project details, tags, and links.`,
    tags: ["Hardware", "PCB Design", "Embedded"],
    status: "wip",
    category: "hardware",
  },
];
