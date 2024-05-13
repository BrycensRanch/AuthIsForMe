import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileSumAggregateInputType> = z
	.object({
		profileId: z.literal(true).optional(),
		profileViews: z.literal(true).optional(),
	})
	.strict();

export const ProfileSumAggregateInputObjectSchema = Schema;
