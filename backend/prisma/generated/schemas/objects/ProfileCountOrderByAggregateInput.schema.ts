import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = z
	.object({
		profileId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		banned: z.lazy(() => SortOrderSchema).optional(),
		profilePrivate: z.lazy(() => SortOrderSchema).optional(),
		profileViews: z.lazy(() => SortOrderSchema).optional(),
		lastSeen: z.lazy(() => SortOrderSchema).optional(),
		avatar: z.lazy(() => SortOrderSchema).optional(),
		username: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		biography: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const ProfileCountOrderByAggregateInputObjectSchema = Schema;
