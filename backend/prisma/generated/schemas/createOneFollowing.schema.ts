import { z } from 'zod';
import { FollowingCreateInputObjectSchema } from './objects/FollowingCreateInput.schema';
import { FollowingUncheckedCreateInputObjectSchema } from './objects/FollowingUncheckedCreateInput.schema';

export const FollowingCreateOneSchema = z.object({
	data: z.union([FollowingCreateInputObjectSchema, FollowingUncheckedCreateInputObjectSchema]),
});
