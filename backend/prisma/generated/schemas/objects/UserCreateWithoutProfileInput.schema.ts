import { z } from 'zod';
import { ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyCreateNestedManyWithoutOwnerInput.schema';
import { MojangAccountCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountCreateNestedOneWithoutUserInput.schema';
import { DiscordAccountCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountCreateNestedOneWithoutUserInput.schema';
import { TwitchAccountCreateNestedOneWithoutUserInputObjectSchema } from './TwitchAccountCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = z
	.object({
		email: z.string(),
		apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateWithoutProfileInputObjectSchema = Schema;
