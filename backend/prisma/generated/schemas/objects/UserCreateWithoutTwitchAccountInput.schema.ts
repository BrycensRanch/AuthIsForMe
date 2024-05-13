import { z } from 'zod';
import { ProfileCreateNestedOneWithoutUserInputObjectSchema } from './ProfileCreateNestedOneWithoutUserInput.schema';
import { ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema } from './ApiKeyCreateNestedManyWithoutOwnerInput.schema';
import { MojangAccountCreateNestedOneWithoutUserInputObjectSchema } from './MojangAccountCreateNestedOneWithoutUserInput.schema';
import { DiscordAccountCreateNestedOneWithoutUserInputObjectSchema } from './DiscordAccountCreateNestedOneWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutTwitchAccountInput> = z
	.object({
		email: z.string(),
		profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputObjectSchema).optional(),
		apiKeys: z.lazy(() => ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountCreateNestedOneWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateWithoutTwitchAccountInputObjectSchema = Schema;
