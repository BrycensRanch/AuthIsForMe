import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyProfileInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
	})
	.strict();

export const UserCreateManyProfileInputObjectSchema = Schema;
