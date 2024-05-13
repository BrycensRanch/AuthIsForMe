import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './MojangAccountUncheckedUpdateOneWithoutUserNestedInput.schema';
import { DiscordAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './DiscordAccountUncheckedUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTwitchAccountInput> = z
	.object({
		email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		userId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
		profileId: z
			.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		apiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutTwitchAccountInputObjectSchema = Schema;
