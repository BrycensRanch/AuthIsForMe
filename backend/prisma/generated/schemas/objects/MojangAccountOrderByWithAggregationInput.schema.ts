import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MojangAccountCountOrderByAggregateInputObjectSchema } from './MojangAccountCountOrderByAggregateInput.schema';
import { MojangAccountAvgOrderByAggregateInputObjectSchema } from './MojangAccountAvgOrderByAggregateInput.schema';
import { MojangAccountMaxOrderByAggregateInputObjectSchema } from './MojangAccountMaxOrderByAggregateInput.schema';
import { MojangAccountMinOrderByAggregateInputObjectSchema } from './MojangAccountMinOrderByAggregateInput.schema';
import { MojangAccountSumOrderByAggregateInputObjectSchema } from './MojangAccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountOrderByWithAggregationInput> = z
	.object({
		uuid: z.lazy(() => SortOrderSchema).optional(),
		username: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => MojangAccountCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => MojangAccountAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => MojangAccountMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => MojangAccountMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => MojangAccountSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const MojangAccountOrderByWithAggregationInputObjectSchema = Schema;
