import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => DiscordAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => DiscordAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => DiscordAccountScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => DiscordAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => DiscordAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		accessTokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		refreshtokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
	})
	.strict();

export const DiscordAccountScalarWhereWithAggregatesInputObjectSchema = Schema;
