import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereUniqueInput> = z
	.object({
		email: z.string().optional(),
		userId: z.number().optional(),
	})
	.strict();

export const UserWhereUniqueInputObjectSchema = Schema;
