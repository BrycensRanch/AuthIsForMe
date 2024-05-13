import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCreateWithoutOwnerInput> = z
	.object({
		name: z.string(),
		type: z.lazy(() => ApiKeyTypeSchema).optional(),
		key: z.string(),
		createdAt: z.coerce.date().optional(),
		validUntil: z.coerce.date(),
	})
	.strict();

export const ApiKeyCreateWithoutOwnerInputObjectSchema = Schema;
