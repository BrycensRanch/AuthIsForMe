import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		type: z.literal(true).optional(),
		key: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		validUntil: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		_all: z.literal(true).optional(),
	})
	.strict();

export const ApiKeyCountAggregateInputObjectSchema = Schema;
