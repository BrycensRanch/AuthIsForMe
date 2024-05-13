import { z } from 'zod';
import { FollowingUpdateInputObjectSchema } from './objects/FollowingUpdateInput.schema';
import { FollowingUncheckedUpdateInputObjectSchema } from './objects/FollowingUncheckedUpdateInput.schema';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';

export const FollowingUpdateOneSchema = z.object({
	data: z.union([FollowingUpdateInputObjectSchema, FollowingUncheckedUpdateInputObjectSchema]),
	where: FollowingWhereUniqueInputObjectSchema,
});
