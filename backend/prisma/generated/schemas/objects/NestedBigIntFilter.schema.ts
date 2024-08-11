import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedBigIntFilter> = z
	.object({
		equals: z.bigint().optional(),
		in: z.union([z.bigint().array(), z.bigint()]).optional(),
		notIn: z.union([z.bigint().array(), z.bigint()]).optional(),
		lt: z.bigint().optional(),
		lte: z.bigint().optional(),
		gt: z.bigint().optional(),
		gte: z.bigint().optional(),
		not: z.union([z.bigint(), z.lazy(() => NestedBigIntFilterObjectSchema)]).optional(),
	})
	.strict();

export const NestedBigIntFilterObjectSchema = Schema;
