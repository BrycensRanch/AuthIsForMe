import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserSumAggregateInputType> = z
	.object({
		userId: z.literal(true).optional(),
		profileId: z.literal(true).optional(),
	})
	.strict();

export const UserSumAggregateInputObjectSchema = Schema;
