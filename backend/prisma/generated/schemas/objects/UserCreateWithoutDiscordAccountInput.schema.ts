import { z } from 'zod';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyCreateNestedManyWithoutOwnerInput.schema';
import { MojangAccountCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutDiscordAccountInput> = z
	.object({
		email: z.string(),
		profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
		apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateWithoutDiscordAccountInputObjectSchema = Schema;
