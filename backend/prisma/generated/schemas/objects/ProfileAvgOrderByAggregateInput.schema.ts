import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileAvgOrderByAggregateInput> = z
	.object({
		profileId: z.lazy(() => SortOrderSchema).optional(),
		profileViews: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const ProfileAvgOrderByAggregateInputObjectSchema = Schema;
