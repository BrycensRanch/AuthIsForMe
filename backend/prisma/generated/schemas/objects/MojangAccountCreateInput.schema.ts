import { z } from 'zod';
import { UserCreateNestedOneWithoutMojangAccountInputObjectSchema } from './UserCreateNestedOneWithoutMojangAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountCreateInput> = z
	.object({
		uuid: z.string(),
		username: z.string(),
		accessTokenHash: z.string(),
		refreshtokenHash: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutMojangAccountInputObjectSchema),
	})
	.strict();

export const MojangAccountCreateInputObjectSchema = Schema;
