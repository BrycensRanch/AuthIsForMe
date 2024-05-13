import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountMinAggregateInputType> = z
	.object({
		uuid: z.literal(true).optional(),
		username: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		accessTokenHash: z.literal(true).optional(),
		refreshtokenHash: z.literal(true).optional(),
	})
	.strict();

export const MojangAccountMinAggregateInputObjectSchema = Schema;
