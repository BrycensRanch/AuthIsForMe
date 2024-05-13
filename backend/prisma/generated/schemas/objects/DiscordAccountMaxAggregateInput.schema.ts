import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountMaxAggregateInputType> = z
	.object({
		userId: z.literal(true).optional(),
		accessTokenHash: z.literal(true).optional(),
		refreshtokenHash: z.literal(true).optional(),
	})
	.strict();

export const DiscordAccountMaxAggregateInputObjectSchema = Schema;
