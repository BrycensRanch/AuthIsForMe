import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => FollowingScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => FollowingScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => FollowingScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => FollowingScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => FollowingScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		followId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
	})
	.strict();

export const FollowingScalarWhereWithAggregatesInputObjectSchema = Schema;
