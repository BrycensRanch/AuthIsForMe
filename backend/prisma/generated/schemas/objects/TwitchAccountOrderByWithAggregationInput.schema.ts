import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TwitchAccountCountOrderByAggregateInputObjectSchema } from './TwitchAccountCountOrderByAggregateInput.schema';
import { TwitchAccountAvgOrderByAggregateInputObjectSchema } from './TwitchAccountAvgOrderByAggregateInput.schema';
import { TwitchAccountMaxOrderByAggregateInputObjectSchema } from './TwitchAccountMaxOrderByAggregateInput.schema';
import { TwitchAccountMinOrderByAggregateInputObjectSchema } from './TwitchAccountMinOrderByAggregateInput.schema';
import { TwitchAccountSumOrderByAggregateInputObjectSchema } from './TwitchAccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountOrderByWithAggregationInput> = z
	.object({
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => TwitchAccountCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => TwitchAccountAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => TwitchAccountMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => TwitchAccountMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => TwitchAccountSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const TwitchAccountOrderByWithAggregationInputObjectSchema = Schema;
