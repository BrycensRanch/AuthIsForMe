import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountUncheckedCreateWithoutUserInput> = z
	.object({
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
	})
	.strict();

export const DiscordAccountUncheckedCreateWithoutUserInputObjectSchema = Schema;
