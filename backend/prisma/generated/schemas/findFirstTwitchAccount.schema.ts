import { z } from 'zod';
import { TwitchAccountOrderByWithRelationInputObjectSchema } from './objects/TwitchAccountOrderByWithRelationInput.schema';
import { TwitchAccountWhereInputObjectSchema } from './objects/TwitchAccountWhereInput.schema';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';
import { TwitchAccountScalarFieldEnumSchema } from './enums/TwitchAccountScalarFieldEnum.schema';

export const TwitchAccountFindFirstSchema = z.object({
	orderBy: z
		.union([
			TwitchAccountOrderByWithRelationInputObjectSchema,
			TwitchAccountOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	where: TwitchAccountWhereInputObjectSchema.optional(),
	cursor: TwitchAccountWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(TwitchAccountScalarFieldEnumSchema).optional(),
});
