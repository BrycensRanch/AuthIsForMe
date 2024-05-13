import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { NestedEnumApiKeyTypeFilterObjectSchema } from './NestedEnumApiKeyTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumApiKeyTypeFilter> = z
	.object({
		equals: z.lazy(() => ApiKeyTypeSchema).optional(),
		in: z.union([z.lazy(() => ApiKeyTypeSchema).array(), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		notIn: z.union([z.lazy(() => ApiKeyTypeSchema).array(), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		not: z.union([z.lazy(() => ApiKeyTypeSchema), z.lazy(() => NestedEnumApiKeyTypeFilterObjectSchema)]).optional(),
	})
	.strict();

export const EnumApiKeyTypeFilterObjectSchema = Schema;
