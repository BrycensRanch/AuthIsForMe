import { z } from 'zod';
import { DiscordAccountCreateInputObjectSchema } from './objects/DiscordAccountCreateInput.schema';
import { DiscordAccountUncheckedCreateInputObjectSchema } from './objects/DiscordAccountUncheckedCreateInput.schema';

export const DiscordAccountCreateOneSchema = z.object({
	data: z.union([DiscordAccountCreateInputObjectSchema, DiscordAccountUncheckedCreateInputObjectSchema]),
});
