import { z } from 'zod';
import { FollowingWhereInputObjectSchema } from './objects/FollowingWhereInput.schema';
import { FollowingOrderByWithAggregationInputObjectSchema } from './objects/FollowingOrderByWithAggregationInput.schema';
import { FollowingScalarWhereWithAggregatesInputObjectSchema } from './objects/FollowingScalarWhereWithAggregatesInput.schema';
import { FollowingScalarFieldEnumSchema } from './enums/FollowingScalarFieldEnum.schema';

export const FollowingGroupBySchema = z.object({
	where: FollowingWhereInputObjectSchema.optional(),
	orderBy: z
		.union([FollowingOrderByWithAggregationInputObjectSchema, FollowingOrderByWithAggregationInputObjectSchema.array()])
		.optional(),
	having: FollowingScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(FollowingScalarFieldEnumSchema),
});
