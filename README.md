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

Minimal, monochrome black-and-white palette that inverts between light and dark, set entirely in JetBrains Mono. The whole look is driven from a single Mantine theme ([`src/theme.ts`](src/theme.ts)).

## Dev

This repo uses [pnpm](https://pnpm.io/) (enforced via `only-allow`).

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Checks

```bash
pnpm check   # typecheck + lint
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
