import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostUncheckedCreateWithoutAuthorInput> = z
	.object({
		id: z.number().optional(),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
		title: z.string(),
		content: z.string().optional().nullable(),
		published: z.boolean().optional().nullable(),
		viewCount: z.number().optional(),
	})
	.strict();

export const PostUncheckedCreateWithoutAuthorInputObjectSchema = Schema;
