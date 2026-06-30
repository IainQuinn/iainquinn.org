export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  body: string;
}

// Raw markdown for every file in src/content/writing, bundled at build time.
const files = import.meta.glob("../content/writing/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

// Minimal YAML-frontmatter parser: scalar `key: value` pairs plus simple
// `- item` lists. Enough for article metadata; not a general YAML engine.
function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>;
  body: string;
} {
  const match = FRONTMATTER.exec(raw);
  if (!match) return { data: {}, body: raw.trim() };

  const [, frontmatter, body] = match;
  const data: Record<string, string | string[]> = {};
  let currentListKey: string | null = null;

  for (const line of frontmatter.split(/\r?\n/)) {
    const listItem = /^\s*-\s+(.*)$/.exec(line);
    if (listItem && currentListKey) {
      (data[currentListKey] as string[]).push(unquote(listItem[1]));
      continue;
    }

    const pair = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
    if (!pair) continue;

    const [, key, value] = pair;
    if (value === "") {
      data[key] = [];
      currentListKey = key;
    } else {
      data[key] = unquote(value);
      currentListKey = null;
    }
  }

  return { data, body: body.trim() };
}

function unquote(value: string): string {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function toArticle(path: string, raw: string): Article {
  const slug = path.split("/").pop()!.replace(/\.md$/, "");
  const { data, body } = parseFrontmatter(raw);
  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    description: typeof data.description === "string" ? data.description : "",
    date: typeof data.date === "string" ? data.date : "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    body,
  };
}

// Newest first.
export const articles: Article[] = Object.entries(files)
  .map(([path, raw]) => toArticle(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getArticle(slug: string | undefined): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
