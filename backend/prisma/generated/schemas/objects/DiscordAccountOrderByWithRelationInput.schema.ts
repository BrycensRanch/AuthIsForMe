import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountOrderByWithRelationInput> = z
	.object({
		userId: z.lazy(() => SortOrderSchema).optional(),
		accessTokenHash: z.lazy(() => SortOrderSchema).optional(),
		refreshtokenHash: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
	})
	.strict();

export const DiscordAccountOrderByWithRelationInputObjectSchema = Schema;
