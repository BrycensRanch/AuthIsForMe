import { z } from 'zod';
import { UserCreateNestedOneWithoutDiscordAccountInputObjectSchema } from './UserCreateNestedOneWithoutDiscordAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountCreateInput> = z
	.object({
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutDiscordAccountInputObjectSchema),
	})
	.strict();

export const DiscordAccountCreateInputObjectSchema = Schema;
