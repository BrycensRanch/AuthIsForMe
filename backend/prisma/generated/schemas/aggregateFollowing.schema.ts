import { z } from 'zod';
import { FollowingOrderByWithRelationInputObjectSchema } from './objects/FollowingOrderByWithRelationInput.schema';
import { FollowingWhereInputObjectSchema } from './objects/FollowingWhereInput.schema';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';
import { FollowingCountAggregateInputObjectSchema } from './objects/FollowingCountAggregateInput.schema';
import { FollowingMinAggregateInputObjectSchema } from './objects/FollowingMinAggregateInput.schema';
import { FollowingMaxAggregateInputObjectSchema } from './objects/FollowingMaxAggregateInput.schema';
import { FollowingAvgAggregateInputObjectSchema } from './objects/FollowingAvgAggregateInput.schema';
import { FollowingSumAggregateInputObjectSchema } from './objects/FollowingSumAggregateInput.schema';

export const FollowingAggregateSchema = z.object({
	orderBy: z
		.union([FollowingOrderByWithRelationInputObjectSchema, FollowingOrderByWithRelationInputObjectSchema.array()])
		.optional(),
	where: FollowingWhereInputObjectSchema.optional(),
	cursor: FollowingWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), FollowingCountAggregateInputObjectSchema]).optional(),
	_min: FollowingMinAggregateInputObjectSchema.optional(),
	_max: FollowingMaxAggregateInputObjectSchema.optional(),
	_avg: FollowingAvgAggregateInputObjectSchema.optional(),
	_sum: FollowingSumAggregateInputObjectSchema.optional(),
});
