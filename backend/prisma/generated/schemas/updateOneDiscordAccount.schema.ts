import { z } from 'zod';
import { DiscordAccountUpdateInputObjectSchema } from './objects/DiscordAccountUpdateInput.schema';
import { DiscordAccountUncheckedUpdateInputObjectSchema } from './objects/DiscordAccountUncheckedUpdateInput.schema';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';

export const DiscordAccountUpdateOneSchema = z.object({
	data: z.union([DiscordAccountUpdateInputObjectSchema, DiscordAccountUncheckedUpdateInputObjectSchema]),
	where: DiscordAccountWhereUniqueInputObjectSchema,
});
