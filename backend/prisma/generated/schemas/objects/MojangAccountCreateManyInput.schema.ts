import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountCreateManyInput> = z
	.object({
		uuid: z.string(),
		username: z.string(),
		userId: z.number(),
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
	})
	.strict();

export const MojangAccountCreateManyInputObjectSchema = Schema;
