import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingMaxAggregateInputType> = z
	.object({
		followId: z.literal(true).optional(),
		userId: z.literal(true).optional(),
	})
	.strict();

export const FollowingMaxAggregateInputObjectSchema = Schema;
