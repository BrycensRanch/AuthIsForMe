import { z } from 'zod';
import { ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateNestedManyWithoutOwnerInput.schema';
import { MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateNestedOneWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutTwitchAccountInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
		profileId: z.number().optional().nullable(),
		apiKeys: z.lazy(() => ApiKeyUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutTwitchAccountInputObjectSchema = Schema;
