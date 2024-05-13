import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DiscordAccountCountOrderByAggregateInputObjectSchema } from './DiscordAccountCountOrderByAggregateInput.schema';
import { DiscordAccountAvgOrderByAggregateInputObjectSchema } from './DiscordAccountAvgOrderByAggregateInput.schema';
import { DiscordAccountMaxOrderByAggregateInputObjectSchema } from './DiscordAccountMaxOrderByAggregateInput.schema';
import { DiscordAccountMinOrderByAggregateInputObjectSchema } from './DiscordAccountMinOrderByAggregateInput.schema';
import { DiscordAccountSumOrderByAggregateInputObjectSchema } from './DiscordAccountSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountOrderByWithAggregationInput> = z
	.object({
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => DiscordAccountCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => DiscordAccountAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => DiscordAccountMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => DiscordAccountMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => DiscordAccountSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const DiscordAccountOrderByWithAggregationInputObjectSchema = Schema;
