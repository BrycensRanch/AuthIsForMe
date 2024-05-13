import { z } from 'zod';
import { UserCreateNestedOneWithoutTwitchAccountInputObjectSchema } from './UserCreateNestedOneWithoutTwitchAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountCreateInput> = z
	.object({
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutTwitchAccountInputObjectSchema),
	})
	.strict();

export const TwitchAccountCreateInputObjectSchema = Schema;
