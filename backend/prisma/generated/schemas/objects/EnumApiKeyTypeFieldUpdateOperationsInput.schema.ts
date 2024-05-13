import { z } from 'zod';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumApiKeyTypeFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => ApiKeyTypeSchema).optional(),
	})
	.strict();

export const EnumApiKeyTypeFieldUpdateOperationsInputObjectSchema = Schema;
