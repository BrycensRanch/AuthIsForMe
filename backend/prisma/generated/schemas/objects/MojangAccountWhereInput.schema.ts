import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => MojangAccountWhereInputObjectSchema),
				z.lazy(() => MojangAccountWhereInputObjectSchema).array(),
			])
			.optional(),
		OR: z
			.lazy(() => MojangAccountWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => MojangAccountWhereInputObjectSchema),
				z.lazy(() => MojangAccountWhereInputObjectSchema).array(),
			])
			.optional(),
		uuid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		accessTokenHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		refreshtokenHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
	})
	.strict();

export const MojangAccountWhereInputObjectSchema = Schema;
