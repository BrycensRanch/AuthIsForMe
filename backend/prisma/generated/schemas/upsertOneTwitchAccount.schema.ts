import { z } from 'zod';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';
import { TwitchAccountCreateInputObjectSchema } from './objects/TwitchAccountCreateInput.schema';
import { TwitchAccountUncheckedCreateInputObjectSchema } from './objects/TwitchAccountUncheckedCreateInput.schema';
import { TwitchAccountUpdateInputObjectSchema } from './objects/TwitchAccountUpdateInput.schema';
import { TwitchAccountUncheckedUpdateInputObjectSchema } from './objects/TwitchAccountUncheckedUpdateInput.schema';

export const TwitchAccountUpsertSchema = z.object({
	where: TwitchAccountWhereUniqueInputObjectSchema,
	create: z.union([TwitchAccountCreateInputObjectSchema, TwitchAccountUncheckedCreateInputObjectSchema]),
	update: z.union([TwitchAccountUpdateInputObjectSchema, TwitchAccountUncheckedUpdateInputObjectSchema]),
});
