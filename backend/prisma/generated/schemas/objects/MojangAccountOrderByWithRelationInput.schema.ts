import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountOrderByWithRelationInput> = z
	.object({
		uuid: z.lazy(() => SortOrderSchema).optional(),
		username: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
	})
	.strict();

export const MojangAccountOrderByWithRelationInputObjectSchema = Schema;
