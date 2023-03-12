// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a schema for each collection you'd like to validate.
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date().transform((str) => new Date(str)),
    updated: z.date().optional(),
    author: z.enum(["Kristian Nielsen"]),
    language: z.enum(["en", "da"]),
    images: z.object({
      thumbnail: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      hero: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog,
};
