import { z } from 'zod';
import { ProfileCreateInputObjectSchema } from './objects/ProfileCreateInput.schema';
import { ProfileUncheckedCreateInputObjectSchema } from './objects/ProfileUncheckedCreateInput.schema';

export const ProfileCreateOneSchema = z.object({
	data: z.union([ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema]),
});
