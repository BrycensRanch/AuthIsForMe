import { z } from 'zod';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyCreateNestedManyWithoutOwnerInput.schema';
import { DiscordAccountCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutMojangAccountInput> = z
	.object({
		email: z.string(),
		profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
		apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateWithoutMojangAccountInputObjectSchema = Schema;
