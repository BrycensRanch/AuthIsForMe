import { z } from 'zod';
import { TwitchAccountOrderByWithRelationInputObjectSchema } from './objects/TwitchAccountOrderByWithRelationInput.schema';
import { TwitchAccountWhereInputObjectSchema } from './objects/TwitchAccountWhereInput.schema';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';
import { TwitchAccountCountAggregateInputObjectSchema } from './objects/TwitchAccountCountAggregateInput.schema';
import { TwitchAccountMinAggregateInputObjectSchema } from './objects/TwitchAccountMinAggregateInput.schema';
import { TwitchAccountMaxAggregateInputObjectSchema } from './objects/TwitchAccountMaxAggregateInput.schema';
import { TwitchAccountAvgAggregateInputObjectSchema } from './objects/TwitchAccountAvgAggregateInput.schema';
import { TwitchAccountSumAggregateInputObjectSchema } from './objects/TwitchAccountSumAggregateInput.schema';

export const TwitchAccountAggregateSchema = z.object({
	orderBy: z
		.union([
			TwitchAccountOrderByWithRelationInputObjectSchema,
			TwitchAccountOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	where: TwitchAccountWhereInputObjectSchema.optional(),
	cursor: TwitchAccountWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), TwitchAccountCountAggregateInputObjectSchema]).optional(),
	_min: TwitchAccountMinAggregateInputObjectSchema.optional(),
	_max: TwitchAccountMaxAggregateInputObjectSchema.optional(),
	_avg: TwitchAccountAvgAggregateInputObjectSchema.optional(),
	_sum: TwitchAccountSumAggregateInputObjectSchema.optional(),
});
