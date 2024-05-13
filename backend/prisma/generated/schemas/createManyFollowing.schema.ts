import { z } from 'zod';
import { FollowingCreateManyInputObjectSchema } from './objects/FollowingCreateManyInput.schema';

export const FollowingCreateManySchema = z.object({
	data: z.union([FollowingCreateManyInputObjectSchema, z.array(FollowingCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional(),
});
