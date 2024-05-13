import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';
import { FollowingCreateInputObjectSchema } from './objects/FollowingCreateInput.schema';
import { FollowingUncheckedCreateInputObjectSchema } from './objects/FollowingUncheckedCreateInput.schema';
import { FollowingUpdateInputObjectSchema } from './objects/FollowingUpdateInput.schema';
import { FollowingUncheckedUpdateInputObjectSchema } from './objects/FollowingUncheckedUpdateInput.schema';

export const FollowingUpsertSchema = z.object({
	where: FollowingWhereUniqueInputObjectSchema,
	create: z.union([FollowingCreateInputObjectSchema, FollowingUncheckedCreateInputObjectSchema]),
	update: z.union([FollowingUpdateInputObjectSchema, FollowingUncheckedUpdateInputObjectSchema]),
});
