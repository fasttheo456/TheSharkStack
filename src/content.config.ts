import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* Articles for the Resources section.
 To add an article: drop a Markdown file in src/content/articles/<slug>.md
 with the frontmatter below. The slug = the file name. */
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string().default("Guide"),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    /* Optional: tool slugs to feature as Allo-style review cards. */
    tools: z.array(z.string()).optional(),
    /* Optional: FAQ shown at the end of the article. */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { articles };
