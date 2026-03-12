import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const textos = defineCollection({
	loader: glob({
		base: './src/content/textos',
		pattern: '**/*.{md,mdx}',
	}),
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		publishedAt: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().optional(),
		slug: z.string().optional(),
		description: z.string().optional(),
	}),
});

export const collections = { textos };