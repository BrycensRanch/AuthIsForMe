import { z } from 'zod';
import { FollowingOrderByWithRelationInputObjectSchema } from './objects/FollowingOrderByWithRelationInput.schema';
import { FollowingWhereInputObjectSchema } from './objects/FollowingWhereInput.schema';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';
import { FollowingScalarFieldEnumSchema } from './enums/FollowingScalarFieldEnum.schema';

export const FollowingFindFirstSchema = z.object({
	orderBy: z
		.union([FollowingOrderByWithRelationInputObjectSchema, FollowingOrderByWithRelationInputObjectSchema.array()])
		.optional(),
	where: FollowingWhereInputObjectSchema.optional(),
	cursor: FollowingWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(FollowingScalarFieldEnumSchema).optional(),
});
