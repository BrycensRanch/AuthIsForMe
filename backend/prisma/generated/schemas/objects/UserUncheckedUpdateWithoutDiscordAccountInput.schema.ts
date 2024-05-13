import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './MojangAccountUncheckedUpdateOneWithoutUserNestedInput.schema';
import { TwitchAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './TwitchAccountUncheckedUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutDiscordAccountInput> = z
	.object({
		email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		userId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
		profileId: z
			.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		apiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutDiscordAccountInputObjectSchema = Schema;
