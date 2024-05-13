import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingCreateManyInput> = z
	.object({
		followId: z.number().optional(),
		userId: z.number(),
	})
	.strict();

export const FollowingCreateManyInputObjectSchema = Schema;
