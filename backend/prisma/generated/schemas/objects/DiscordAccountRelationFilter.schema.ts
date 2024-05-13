import { z } from 'zod';
import { DiscordAccountWhereInputObjectSchema } from './DiscordAccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountRelationFilter> = z
	.object({
		is: z
			.lazy(() => DiscordAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => DiscordAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
	})
	.strict();

export const DiscordAccountRelationFilterObjectSchema = Schema;
