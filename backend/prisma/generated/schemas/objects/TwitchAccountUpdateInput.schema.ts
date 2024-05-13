import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTwitchAccountNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTwitchAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountUpdateInput> = z
	.object({
		accessTokenHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		refreshtokenHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		user: z.lazy(() => UserUpdateOneRequiredWithoutTwitchAccountNestedInputObjectSchema).optional(),
	})
	.strict();

export const TwitchAccountUpdateInputObjectSchema = Schema;
