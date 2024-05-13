import { z } from 'zod';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumApiKeyTypeWithAggregatesFilterObjectSchema } from './EnumApiKeyTypeWithAggregatesFilter.schema';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ApiKeyScalarWhereWithAggregatesInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		type: z
			.union([z.lazy(() => EnumApiKeyTypeWithAggregatesFilterObjectSchema), z.lazy(() => ApiKeyTypeSchema)])
			.optional(),
		key: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		validUntil: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
		userId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
	})
	.strict();

export const ApiKeyScalarWhereWithAggregatesInputObjectSchema = Schema;
