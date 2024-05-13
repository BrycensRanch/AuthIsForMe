import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => TwitchAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => TwitchAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => TwitchAccountScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => TwitchAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => TwitchAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		accessTokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		refreshtokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
	})
	.strict();

export const TwitchAccountScalarWhereWithAggregatesInputObjectSchema = Schema;
