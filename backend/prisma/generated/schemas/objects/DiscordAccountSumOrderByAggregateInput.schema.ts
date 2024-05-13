import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountSumOrderByAggregateInput> = z
	.object({
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const DiscordAccountSumOrderByAggregateInputObjectSchema = Schema;
