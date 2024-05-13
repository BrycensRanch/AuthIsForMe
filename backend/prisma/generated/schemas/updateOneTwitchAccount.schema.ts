import { z } from 'zod';
import { TwitchAccountUpdateInputObjectSchema } from './objects/TwitchAccountUpdateInput.schema';
import { TwitchAccountUncheckedUpdateInputObjectSchema } from './objects/TwitchAccountUncheckedUpdateInput.schema';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';

export const TwitchAccountUpdateOneSchema = z.object({
	data: z.union([TwitchAccountUpdateInputObjectSchema, TwitchAccountUncheckedUpdateInputObjectSchema]),
	where: TwitchAccountWhereUniqueInputObjectSchema,
});
