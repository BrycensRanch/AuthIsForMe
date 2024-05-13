import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => FollowingScalarWhereInputObjectSchema),
				z.lazy(() => FollowingScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => FollowingScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => FollowingScalarWhereInputObjectSchema),
				z.lazy(() => FollowingScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		followId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
	})
	.strict();

export const FollowingScalarWhereInputObjectSchema = Schema;
