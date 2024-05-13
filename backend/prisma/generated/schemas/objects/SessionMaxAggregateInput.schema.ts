import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		sid: z.literal(true).optional(),
		expires: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
	})
	.strict();

export const SessionMaxAggregateInputObjectSchema = Schema;
