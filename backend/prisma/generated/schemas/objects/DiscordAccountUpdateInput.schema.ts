import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutDiscordAccountNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutDiscordAccountNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountUpdateInput> = z
	.object({
		accessTokenHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		refreshtokenHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		user: z.lazy(() => UserUpdateOneRequiredWithoutDiscordAccountNestedInputObjectSchema).optional(),
	})
	.strict();

export const DiscordAccountUpdateInputObjectSchema = Schema;
