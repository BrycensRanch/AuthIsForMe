import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput.schema';
import { MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './MojangAccountUncheckedUpdateOneWithoutUserNestedInput.schema';
import { DiscordAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './DiscordAccountUncheckedUpdateOneWithoutUserNestedInput.schema';
import { TwitchAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from './TwitchAccountUncheckedUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProfileInput> = z
	.object({
		email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		userId: z.union([z.number(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
		apiKeys: z.lazy(() => ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutProfileInputObjectSchema = Schema;
