import { z } from 'zod';
import { TwitchAccountCreateManyInputObjectSchema } from './objects/TwitchAccountCreateManyInput.schema';

export const TwitchAccountCreateManySchema = z.object({
	data: z.union([TwitchAccountCreateManyInputObjectSchema, z.array(TwitchAccountCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional(),
});
