import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountWhereUniqueInput> = z
	.object({
		uuid: z.string().optional(),
		username: z.string().optional(),
		userId: z.number().optional(),
		accessTokenHash: z.string().optional(),
		refreshtokenHash: z.string().optional(),
	})
	.strict();

export const MojangAccountWhereUniqueInputObjectSchema = Schema;
