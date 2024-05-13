import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => MojangAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => MojangAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => MojangAccountScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => MojangAccountScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => MojangAccountScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		uuid: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		username: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		accessTokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		refreshtokenHash: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
	})
	.strict();

export const MojangAccountScalarWhereWithAggregatesInputObjectSchema = Schema;
