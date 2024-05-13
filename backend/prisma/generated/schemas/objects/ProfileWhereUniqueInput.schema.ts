import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileWhereUniqueInput> = z
	.object({
		profileId: z.number().optional(),
		username: z.string().optional(),
	})
	.strict();

export const ProfileWhereUniqueInputObjectSchema = Schema;
