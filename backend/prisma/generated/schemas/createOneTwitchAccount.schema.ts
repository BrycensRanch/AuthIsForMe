import { z } from 'zod';
import { TwitchAccountCreateInputObjectSchema } from './objects/TwitchAccountCreateInput.schema';
import { TwitchAccountUncheckedCreateInputObjectSchema } from './objects/TwitchAccountUncheckedCreateInput.schema';

export const TwitchAccountCreateOneSchema = z.object({
	data: z.union([TwitchAccountCreateInputObjectSchema, TwitchAccountUncheckedCreateInputObjectSchema]),
});
