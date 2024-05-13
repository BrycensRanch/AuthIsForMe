import { z } from 'zod';
import { ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutMojangAccountInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
		profileId: z.number().optional().nullable(),
		apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutMojangAccountInputObjectSchema = Schema;
