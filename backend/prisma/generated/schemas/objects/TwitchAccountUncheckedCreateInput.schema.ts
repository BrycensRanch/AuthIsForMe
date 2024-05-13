import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountUncheckedCreateInput> = z
	.object({
		userId: z.number(),
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
	})
	.strict();

export const TwitchAccountUncheckedCreateInputObjectSchema = Schema;
