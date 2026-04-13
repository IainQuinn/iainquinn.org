# iainquinn.org

Personal portfolio site for Iain Quinn — Full Stack Developer, Computational Chemist, and Hardware Maker.

Live at [iainquinn.org](https://iainquinn.org)

## Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vitejs.dev/)
- [Mantine UI v8](https://mantine.dev/)
- [React Router v7](https://reactrouter.com/)
- Deployed to GitHub Pages via GitHub Actions

## Design

8-bit scientific aesthetic — Space Grotesk headings, JetBrains Mono body text, phosphor green and amber accents.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project content

Projects are defined in [`src/data/projects.ts`](src/data/projects.ts). Each entry has:

```ts
{
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
```
