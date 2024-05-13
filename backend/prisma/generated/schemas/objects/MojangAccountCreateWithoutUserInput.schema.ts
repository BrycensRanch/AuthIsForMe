import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountCreateWithoutUserInput> = z
	.object({
		uuid: z.string(),
		username: z.string(),
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
	})
	.strict();

export const MojangAccountCreateWithoutUserInputObjectSchema = Schema;
