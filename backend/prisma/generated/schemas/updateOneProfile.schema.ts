import { z } from 'zod';
import { ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema';
import { ProfileUncheckedUpdateInputObjectSchema } from './objects/ProfileUncheckedUpdateInput.schema';
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';

export const ProfileUpdateOneSchema = z.object({
	data: z.union([ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema]),
	where: ProfileWhereUniqueInputObjectSchema,
});
