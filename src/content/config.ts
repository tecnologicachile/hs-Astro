import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    category: z.enum(['E-commerce', 'Softland ERP', 'Seguridad', 'Cloud Computing', 'Tutoriales', 'Tendencias']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };