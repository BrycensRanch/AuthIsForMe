import { z } from 'zod';
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';
import { ProfileCreateInputObjectSchema } from './objects/ProfileCreateInput.schema';
import { ProfileUncheckedCreateInputObjectSchema } from './objects/ProfileUncheckedCreateInput.schema';
import { ProfileUpdateInputObjectSchema } from './objects/ProfileUpdateInput.schema';
import { ProfileUncheckedUpdateInputObjectSchema } from './objects/ProfileUncheckedUpdateInput.schema';

export const ProfileUpsertSchema = z.object({
	where: ProfileWhereUniqueInputObjectSchema,
	create: z.union([ProfileCreateInputObjectSchema, ProfileUncheckedCreateInputObjectSchema]),
	update: z.union([ProfileUpdateInputObjectSchema, ProfileUncheckedUpdateInputObjectSchema]),
});
