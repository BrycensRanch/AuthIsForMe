import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutOwnerInput> = z
	.object({
		id: z.number().optional(),
		name: z.string(),
		type: z.lazy(() => ApiKeyTypeSchema).optional(),
		key: z.string(),
		createdAt: z.coerce.date().optional(),
		validUntil: z.coerce.date(),
	})
	.strict();

export const ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema = Schema;
