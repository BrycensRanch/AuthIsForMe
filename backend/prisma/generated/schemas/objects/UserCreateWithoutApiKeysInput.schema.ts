import { z } from 'zod';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { MojangAccountCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountCreateNestedOneWithoutUserInput.schema';
import { DiscordAccountCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutApiKeysInput> = z
	.object({
		email: z.string(),
		profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateWithoutApiKeysInputObjectSchema = Schema;
