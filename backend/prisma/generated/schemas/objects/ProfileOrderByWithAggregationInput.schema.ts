import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileCountOrderByAggregateInputObjectSchema } from './ProfileCountOrderByAggregateInput.schema';
import { ProfileAvgOrderByAggregateInputObjectSchema } from './ProfileAvgOrderByAggregateInput.schema';
import { ProfileMaxOrderByAggregateInputObjectSchema } from './ProfileMaxOrderByAggregateInput.schema';
import { ProfileMinOrderByAggregateInputObjectSchema } from './ProfileMinOrderByAggregateInput.schema';
import { ProfileSumOrderByAggregateInputObjectSchema } from './ProfileSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z
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
		_count: z.lazy(() => ProfileCountOrderByAggregateInputObjectSchema).optional(),
		_avg: z.lazy(() => ProfileAvgOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ProfileMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ProfileMinOrderByAggregateInputObjectSchema).optional(),
		_sum: z.lazy(() => ProfileSumOrderByAggregateInputObjectSchema).optional(),
	})
	.strict();

export const ProfileOrderByWithAggregationInputObjectSchema = Schema;
