import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FollowingCountOrderByAggregateInputObjectSchema } from './FollowingCountOrderByAggregateInput.schema';
import { FollowingAvgOrderByAggregateInputObjectSchema } from './FollowingAvgOrderByAggregateInput.schema';
import { FollowingMaxOrderByAggregateInputObjectSchema } from './FollowingMaxOrderByAggregateInput.schema';
import { FollowingMinOrderByAggregateInputObjectSchema } from './FollowingMinOrderByAggregateInput.schema';
import { FollowingSumOrderByAggregateInputObjectSchema } from './FollowingSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingOrderByWithAggregationInput> = z
	.object({
		followId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => FollowingCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => FollowingAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => FollowingMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => FollowingMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => FollowingSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const FollowingOrderByWithAggregationInputObjectSchema = Schema;
