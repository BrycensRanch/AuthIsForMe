import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
	.object({
		email: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		profileId: z.literal(true).optional(),
	})
	.strict();

export const UserMaxAggregateInputObjectSchema = Schema;
