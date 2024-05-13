import { z } from 'zod';
import { DiscordAccountCreateManyInputObjectSchema } from './objects/DiscordAccountCreateManyInput.schema';

export const DiscordAccountCreateManySchema = z.object({
	data: z.union([DiscordAccountCreateManyInputObjectSchema, z.array(DiscordAccountCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional(),
});
