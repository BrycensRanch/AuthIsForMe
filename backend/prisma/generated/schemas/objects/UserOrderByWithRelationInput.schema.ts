import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProfileOrderByWithRelationInputObjectSchema } from './ProfileOrderByWithRelationInput.schema';
import { ApiKeyOrderByRelationAggregateInputObjectSchema } from './ApiKeyOrderByRelationAggregateInput.schema';
import { MojangAccountOrderByWithRelationInputObjectSchema } from './MojangAccountOrderByWithRelationInput.schema';
import { DiscordAccountOrderByWithRelationInputObjectSchema } from './DiscordAccountOrderByWithRelationInput.schema';
import { TwitchAccountOrderByWithRelationInputObjectSchema } from './TwitchAccountOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		profileId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
		profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
		apiKeys: z.lazy(() => ApiKeyOrderByRelationAggregateInputObjectSchema).optional(),
		mojangAccount: z.lazy(() => MojangAccountOrderByWithRelationInputObjectSchema).optional(),
		DiscordAccount: z.lazy(() => DiscordAccountOrderByWithRelationInputObjectSchema).optional(),
		TwitchAccount: z.lazy(() => TwitchAccountOrderByWithRelationInputObjectSchema).optional(),
	})
	.strict();

export const UserOrderByWithRelationInputObjectSchema = Schema;
