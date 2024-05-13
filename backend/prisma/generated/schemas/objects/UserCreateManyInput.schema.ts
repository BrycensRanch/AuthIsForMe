import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
		profileId: z.number().optional().nullable(),
	})
	.strict();

export const UserCreateManyInputObjectSchema = Schema;
