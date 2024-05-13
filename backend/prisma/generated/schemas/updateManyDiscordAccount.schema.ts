import { z } from 'zod';
import { DiscordAccountUpdateManyMutationInputObjectSchema } from './objects/DiscordAccountUpdateManyMutationInput.schema';
import { DiscordAccountWhereInputObjectSchema } from './objects/DiscordAccountWhereInput.schema';

export const DiscordAccountUpdateManySchema = z.object({
	data: DiscordAccountUpdateManyMutationInputObjectSchema,
	where: DiscordAccountWhereInputObjectSchema.optional(),
});
