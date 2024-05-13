import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUncheckedCreateWithoutUserInput> = z
	.object({
		followId: z.number().optional(),
	})
	.strict();

export const FollowingUncheckedCreateWithoutUserInputObjectSchema = Schema;
