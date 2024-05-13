import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserAvgAggregateInputType> = z
	.object({
		userId: z.literal(true).optional(),
		profileId: z.literal(true).optional(),
	})
	.strict();

export const UserAvgAggregateInputObjectSchema = Schema;
