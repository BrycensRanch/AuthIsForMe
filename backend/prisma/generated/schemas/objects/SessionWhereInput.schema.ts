import { z } from 'zod';
import { BigIntFilterObjectSchema } from './BigIntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SessionWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()])
			.optional(),
		OR: z
			.lazy(() => SessionWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => SessionWhereInputObjectSchema), z.lazy(() => SessionWhereInputObjectSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => BigIntFilterObjectSchema), z.bigint()]).optional(),
		sid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		expires: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		data: z.lazy(() => JsonFilterObjectSchema).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
	})
	.strict();

export const SessionWhereInputObjectSchema = Schema;
