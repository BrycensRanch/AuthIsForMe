import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileMaxAggregateInputType> = z
	.object({
		profileId: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		banned: z.literal(true).optional(),
		profilePrivate: z.literal(true).optional(),
		profileViews: z.literal(true).optional(),
		lastSeen: z.literal(true).optional(),
		avatar: z.literal(true).optional(),
		username: z.literal(true).optional(),
		role: z.literal(true).optional(),
		biography: z.literal(true).optional(),
	})
	.strict();

export const ProfileMaxAggregateInputObjectSchema = Schema;
