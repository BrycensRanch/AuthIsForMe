import { z } from 'zod';
import { TwitchAccountWhereInputObjectSchema } from './TwitchAccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountRelationFilter> = z
	.object({
		is: z
			.lazy(() => TwitchAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => TwitchAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
	})
	.strict();

export const TwitchAccountRelationFilterObjectSchema = Schema;
