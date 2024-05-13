import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountSumAggregateInputType> = z
	.object({
		userId: z.literal(true).optional(),
	})
	.strict();

export const MojangAccountSumAggregateInputObjectSchema = Schema;
