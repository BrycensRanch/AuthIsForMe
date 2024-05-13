import { z } from 'zod';
import { ApiKeyWhereInputObjectSchema } from './ApiKeyWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyListRelationFilter> = z
	.object({
		every: z.lazy(() => ApiKeyWhereInputObjectSchema).optional(),
		some: z.lazy(() => ApiKeyWhereInputObjectSchema).optional(),
		none: z.lazy(() => ApiKeyWhereInputObjectSchema).optional(),
	})
	.strict();

export const ApiKeyListRelationFilterObjectSchema = Schema;
