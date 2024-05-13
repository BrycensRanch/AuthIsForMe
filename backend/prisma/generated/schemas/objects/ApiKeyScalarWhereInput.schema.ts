import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumApiKeyTypeFilterObjectSchema } from './EnumApiKeyTypeFilter.schema';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => ApiKeyScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array(),
			])
			.optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		type: z.union([z.lazy(() => EnumApiKeyTypeFilterObjectSchema), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		validUntil: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
	})
	.strict();

export const ApiKeyScalarWhereInputObjectSchema = Schema;
