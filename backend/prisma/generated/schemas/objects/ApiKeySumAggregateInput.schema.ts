import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeySumAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		userId: z.literal(true).optional(),
	})
	.strict();

export const ApiKeySumAggregateInputObjectSchema = Schema;
