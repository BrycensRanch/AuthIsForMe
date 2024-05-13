import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProfileUpdateOneWithoutUserNestedInputObjectSchema } from './ProfileUpdateOneWithoutUserNestedInput.schema';
import { ApiKeyUpdateManyWithoutOwnerNestedInputObjectSchema } from './ApiKeyUpdateManyWithoutOwnerNestedInput.schema';
import { MojangAccountUpdateOneWithoutUserNestedInputObjectSchema } from './MojangAccountUpdateOneWithoutUserNestedInput.schema';
import { DiscordAccountUpdateOneWithoutUserNestedInputObjectSchema } from './DiscordAccountUpdateOneWithoutUserNestedInput.schema';
import { TwitchAccountUpdateOneWithoutUserNestedInputObjectSchema } from './TwitchAccountUpdateOneWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
	.object({
		email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
		profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		apiKeys: z.lazy(() => ApiKeyUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUpdateOneWithoutUserNestedInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUpdateOneWithoutUserNestedInputObjectSchema).optional(),
	})
	.strict();

export const UserUpdateInputObjectSchema = Schema;
