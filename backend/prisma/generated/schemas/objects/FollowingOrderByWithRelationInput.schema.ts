import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingOrderByWithRelationInput> = z
	.object({
		followId: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		User: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
	})
	.strict();

export const FollowingOrderByWithRelationInputObjectSchema = Schema;
