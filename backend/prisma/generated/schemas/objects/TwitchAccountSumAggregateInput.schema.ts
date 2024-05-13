import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountSumAggregateInputType> = z
	.object({
		userId: z.literal(true).optional(),
	})
	.strict();

export const TwitchAccountSumAggregateInputObjectSchema = Schema;
