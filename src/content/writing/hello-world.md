---
title: Hello, World
description: A placeholder article to kick off the writing section — and a quick note on how this blog is built.
date: 2026-06-30
tags:
  - meta
  - react
---

This is a placeholder article. Replace it with real writing whenever you're
ready — or delete it and add your own.

## How this section works

Each article is a single markdown file in `src/content/writing/`. The file's
frontmatter drives the metadata:

```yaml
---
title: Hello, World
description: A short summary used on the writing index.
date: 2026-06-30
tags:
  - meta
---
```

At build time, Vite globs every `.md` file in that folder, parses the
frontmatter, and turns it into a typed article. The body you're reading right
now is rendered with `react-markdown`, so standard markdown just works:

- **Bold**, _italic_, and `inline code`
- Lists, like this one
- [Links](https://iainquinn.org)
- Headings, blockquotes, and fenced code blocks

> The filename (minus `.md`) becomes the URL slug — this article lives at
> `/writing/hello-world`.

## Adding a new article

1. Create `src/content/writing/my-new-post.md`.
2. Add the frontmatter block.
3. Write. That's it — it appears on the writing index automatically, sorted by date.
