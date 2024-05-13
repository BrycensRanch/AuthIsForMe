import { z } from 'zod';
import { MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateNestedOneWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutApiKeysInput> = z
	.object({
		email: z.string(),
		userId: z.number().optional(),
		profileId: z.number().optional().nullable(),
		mojangAccount: z.lazy(() => MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutApiKeysInputObjectSchema = Schema;
