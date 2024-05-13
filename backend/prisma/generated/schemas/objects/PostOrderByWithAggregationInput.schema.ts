import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostCountOrderByAggregateInputObjectSchema } from './PostCountOrderByAggregateInput.schema';
import { PostAvgOrderByAggregateInputObjectSchema } from './PostAvgOrderByAggregateInput.schema';
import { PostMaxOrderByAggregateInputObjectSchema } from './PostMaxOrderByAggregateInput.schema';
import { PostMinOrderByAggregateInputObjectSchema } from './PostMinOrderByAggregateInput.schema';
import { PostSumOrderByAggregateInputObjectSchema } from './PostSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		content: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		published: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		viewCount: z.lazy(() => SortOrderSchema).optional(),
		authorId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		_count: z.lazy(() => PostCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => PostAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => PostMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => PostMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => PostSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const PostOrderByWithAggregationInputObjectSchema = Schema;
