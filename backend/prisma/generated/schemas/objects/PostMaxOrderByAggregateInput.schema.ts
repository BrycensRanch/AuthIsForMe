import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		content: z.lazy(() => SortOrderSchema).optional(),
		published: z.lazy(() => SortOrderSchema).optional(),
		viewCount: z.lazy(() => SortOrderSchema).optional(),
		authorId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const PostMaxOrderByAggregateInputObjectSchema = Schema;
