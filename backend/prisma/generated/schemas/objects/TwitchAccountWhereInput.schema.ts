import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => TwitchAccountWhereInputObjectSchema),
				z.lazy(() => TwitchAccountWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => TwitchAccountWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => TwitchAccountWhereInputObjectSchema),
				z.lazy(() => TwitchAccountWhereInputObjectSchema).array(),
			])
			.optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		accessTokenHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		refreshtokenHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
	})
	.strict();

export const TwitchAccountWhereInputObjectSchema = Schema;
