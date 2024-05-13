import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema';
import { FollowingOrderByRelationAggregateInputObjectSchema } from './FollowingOrderByRelationAggregateInput.schema';
import { UserOrderByRelationAggregateInputObjectSchema } from './UserOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = z
	.object({
		profileId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		banned: z.lazy(() => SortOrderSchema).optional(),
		profilePrivate: z.lazy(() => SortOrderSchema).optional(),
		profileViews: z.lazy(() => SortOrderSchema).optional(),
		lastSeen: z.lazy(() => SortOrderSchema).optional(),
		avatar: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		username: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		biography: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional(),
		Following: z.lazy(() => FollowingOrderByRelationAggregateInputObjectSchema).optional(),
		User: z.lazy(() => UserOrderByRelationAggregateInputObjectSchema).optional(),
	})
	.strict();

export const ProfileOrderByWithRelationInputObjectSchema = Schema;
