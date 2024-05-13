import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { ProfileRelationFilterObjectSchema } from './ProfileRelationFilter.schema';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => FollowingWhereInputObjectSchema), z.lazy(() => FollowingWhereInputObjectSchema).array()])
			.optional(),
		OR: z
			.lazy(() => FollowingWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => FollowingWhereInputObjectSchema), z.lazy(() => FollowingWhereInputObjectSchema).array()])
			.optional(),
		followId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		User: z
			.union([z.lazy(() => ProfileRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)])
			.optional(),
	})
	.strict();

export const FollowingWhereInputObjectSchema = Schema;
