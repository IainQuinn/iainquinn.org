export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
  pdfUrl?: string;
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
      "This portfolio site. Built with React, TypeScript, and Mantine UI. A clean, minimal, monochrome design.",
    longDescription: `This site is the thing you're looking at right now. Built with React 19, TypeScript, Vite, and Mantine UI v8. The design is deliberately minimal — a monochrome black-and-white palette that inverts between light and dark, set entirely in JetBrains Mono. Everything is driven from a single theme so the look stays consistent and easy to change.\n\nDeployed automatically to GitHub Pages via GitHub Actions on every push to main.`,
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
    title: "Simulating Solvation in Diethyl Ether",
    description:
      "My MSci thesis: a coarse-grained RISM model for predicting solvation free energies in diethyl ether, benchmarked against quantum mechanics and molecular dynamics.",
    longDescription: `My MSci thesis in Applied Chemistry & Chemical Engineering at the University of Strathclyde (supervised by Dr David Palmer, 2022). The project built a computational model to predict how molecules dissolve in diethyl ether — specifically their solvation free energies (SFEs), a property that underpins solubility, partitioning, and crystallisation.\n\nFollowing the method of Fowles et al., the solvent was coarse-grained to a single Lennard-Jones bead. Quantum-mechanical counterpoise calculations on diethyl ether dimer configurations provided a range of Lennard-Jones parameters, and a 10×10 grid search identified the set that gave the best 3D-RISM SFE predictions across a 72-molecule solute dataset.\n\nThe best model predicted SFEs for 59 of 72 solutes with an RMSE of 1.7 kcal/mol. Comparing its radial distribution functions against an atomistic molecular dynamics simulation revealed that coarse-graining to a single bead loses important interactions — the model captured only van der Waals forces — pointing to electrostatics as the key addition for future work.\n\nBuilt in Python around RISM integral-equation theory, quantum-mechanics calculations, and molecular dynamics. The full thesis is embedded below.`,
    date: "Apr 2022",
    tags: ["Python", "RISM Theory", "Molecular Dynamics", "Quantum Mechanics"],
    pdfUrl: "/thesis.pdf",
    status: "live",
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
