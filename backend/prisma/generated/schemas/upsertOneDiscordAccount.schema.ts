import { z } from 'zod';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';
import { DiscordAccountCreateInputObjectSchema } from './objects/DiscordAccountCreateInput.schema';
import { DiscordAccountUncheckedCreateInputObjectSchema } from './objects/DiscordAccountUncheckedCreateInput.schema';
import { DiscordAccountUpdateInputObjectSchema } from './objects/DiscordAccountUpdateInput.schema';
import { DiscordAccountUncheckedUpdateInputObjectSchema } from './objects/DiscordAccountUncheckedUpdateInput.schema';

export const DiscordAccountUpsertSchema = z.object({
	where: DiscordAccountWhereUniqueInputObjectSchema,
	create: z.union([DiscordAccountCreateInputObjectSchema, DiscordAccountUncheckedCreateInputObjectSchema]),
	update: z.union([DiscordAccountUpdateInputObjectSchema, DiscordAccountUncheckedUpdateInputObjectSchema]),
});
