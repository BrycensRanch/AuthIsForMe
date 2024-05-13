import { z } from 'zod';
import { ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutDiscordAccountInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
		profileId: z.number().optional().nullable(),
		apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutDiscordAccountInputObjectSchema = Schema;
