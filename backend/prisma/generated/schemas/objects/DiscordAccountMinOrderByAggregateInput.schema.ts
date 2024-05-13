import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountMinOrderByAggregateInput> = z
	.object({
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const DiscordAccountMinOrderByAggregateInputObjectSchema = Schema;
