import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Defines the blog collection and its schema
const blog = defineCollection({
  // Loads every Markdown file in src/content/blog/ as an entry
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    // Catches a typo like "medum" instead of allowing invalid data
    roast: z.enum(['light', 'medium', 'dark']).optional(),
    excerpt: z.string(),
  }),
});

export const collections = { blog };
