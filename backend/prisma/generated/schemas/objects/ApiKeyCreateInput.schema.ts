import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { UserCreateNestedOneWithoutApiKeysInputObjectSchema } from './UserCreateNestedOneWithoutApiKeysInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCreateInput> = z
	.object({
		name: z.string(),
		type: z.lazy(() => ApiKeyTypeSchema).optional(),
		key: z.string(),
		createdAt: z.coerce.date().optional(),
		validUntil: z.coerce.date(),
		owner: z.lazy(() => UserCreateNestedOneWithoutApiKeysInputObjectSchema),
	})
	.strict();

export const ApiKeyCreateInputObjectSchema = Schema;
