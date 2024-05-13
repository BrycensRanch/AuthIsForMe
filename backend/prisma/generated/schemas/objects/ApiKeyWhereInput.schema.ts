import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumApiKeyTypeFilterObjectSchema } from './EnumApiKeyTypeFilter.schema';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()])
			.optional(),
		OR: z
			.lazy(() => ApiKeyWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => ApiKeyWhereInputObjectSchema), z.lazy(() => ApiKeyWhereInputObjectSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		type: z.union([z.lazy(() => EnumApiKeyTypeFilterObjectSchema), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		key: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		validUntil: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		owner: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
	})
	.strict();

export const ApiKeyWhereInputObjectSchema = Schema;
