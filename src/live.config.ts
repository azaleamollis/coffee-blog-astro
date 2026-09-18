import { defineLiveCollection } from 'astro:content';
import { z } from 'astro/zod';
import { coffeeLoader } from './live/coffee-loader';

const coffee = defineLiveCollection({
  loader: coffeeLoader,
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { coffee };
