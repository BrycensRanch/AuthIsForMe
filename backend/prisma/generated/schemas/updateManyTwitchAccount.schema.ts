import { z } from 'zod';
import { TwitchAccountUpdateManyMutationInputObjectSchema } from './objects/TwitchAccountUpdateManyMutationInput.schema';
import { TwitchAccountWhereInputObjectSchema } from './objects/TwitchAccountWhereInput.schema';

export const TwitchAccountUpdateManySchema = z.object({
	data: TwitchAccountUpdateManyMutationInputObjectSchema,
	where: TwitchAccountWhereInputObjectSchema.optional(),
});
