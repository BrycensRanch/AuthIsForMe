import { z } from 'zod';
import { FollowingUpdateManyMutationInputObjectSchema } from './objects/FollowingUpdateManyMutationInput.schema';
import { FollowingWhereInputObjectSchema } from './objects/FollowingWhereInput.schema';

export const FollowingUpdateManySchema = z.object({
	data: FollowingUpdateManyMutationInputObjectSchema,
	where: FollowingWhereInputObjectSchema.optional(),
});
