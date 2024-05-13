import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumApiKeyTypeFilter> = z
	.object({
		equals: z.lazy(() => ApiKeyTypeSchema).optional(),
		in: z.union([z.lazy(() => ApiKeyTypeSchema).array(), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		notIn: z.union([z.lazy(() => ApiKeyTypeSchema).array(), z.lazy(() => ApiKeyTypeSchema)]).optional(),
		not: z.union([z.lazy(() => ApiKeyTypeSchema), z.lazy(() => NestedEnumApiKeyTypeFilterObjectSchema)]).optional(),
	})
	.strict();

export const NestedEnumApiKeyTypeFilterObjectSchema = Schema;
