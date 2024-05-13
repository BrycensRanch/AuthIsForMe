import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountWhereUniqueInput> = z
	.object({
		userId: z.number().optional(),
		accessTokenHash: z.string().optional(),
		refreshtokenHash: z.string().optional(),
	})
	.strict();

export const DiscordAccountWhereUniqueInputObjectSchema = Schema;
