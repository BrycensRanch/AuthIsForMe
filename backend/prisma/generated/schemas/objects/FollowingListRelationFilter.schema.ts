import { z } from 'zod';
import { FollowingWhereInputObjectSchema } from './FollowingWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingListRelationFilter> = z
	.object({
		every: z.lazy(() => FollowingWhereInputObjectSchema).optional(),
		some: z.lazy(() => FollowingWhereInputObjectSchema).optional(),
		none: z.lazy(() => FollowingWhereInputObjectSchema).optional(),
	})
	.strict();

export const FollowingListRelationFilterObjectSchema = Schema;
