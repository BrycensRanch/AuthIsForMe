import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateInput> = z
	.object({
		id: z.number().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		title: z.string(),
		content: z.string().optional().nullable(),
		published: z.boolean().optional().nullable(),
		viewCount: z.number().optional(),
		authorId: z.number().optional().nullable(),
	})
	.strict();

export const PostUncheckedCreateInputObjectSchema = Schema;
