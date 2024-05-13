import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ApiKeyCountOrderByAggregateInputObjectSchema } from './ApiKeyCountOrderByAggregateInput.schema';
import { ApiKeyAvgOrderByAggregateInputObjectSchema } from './ApiKeyAvgOrderByAggregateInput.schema';
import { ApiKeyMaxOrderByAggregateInputObjectSchema } from './ApiKeyMaxOrderByAggregateInput.schema';
import { ApiKeyMinOrderByAggregateInputObjectSchema } from './ApiKeyMinOrderByAggregateInput.schema';
import { ApiKeySumOrderByAggregateInputObjectSchema } from './ApiKeySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		key: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		validUntil: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => ApiKeyCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => ApiKeyAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ApiKeyMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ApiKeyMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => ApiKeySumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const ApiKeyOrderByWithAggregationInputObjectSchema = Schema;
