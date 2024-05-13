import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ApiKeyTypeSchema } from '../enums/ApiKeyType.schema';
import { EnumApiKeyTypeFieldUpdateOperationsInputObjectSchema } from './EnumApiKeyTypeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUpdateWithoutOwnerInput> = z
	.object({
		name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		type: z
			.union([z.lazy(() => ApiKeyTypeSchema), z.lazy(() => EnumApiKeyTypeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		key: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
		validUntil: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
	})
	.strict();

export const ApiKeyUpdateWithoutOwnerInputObjectSchema = Schema;
