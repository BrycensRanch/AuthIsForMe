import { z } from 'zod';
import { DiscordAccountOrderByWithRelationInputObjectSchema } from './objects/DiscordAccountOrderByWithRelationInput.schema';
import { DiscordAccountWhereInputObjectSchema } from './objects/DiscordAccountWhereInput.schema';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';
import { DiscordAccountScalarFieldEnumSchema } from './enums/DiscordAccountScalarFieldEnum.schema';

export const DiscordAccountFindFirstSchema = z.object({
	orderBy: z
		.union([
			DiscordAccountOrderByWithRelationInputObjectSchema,
			DiscordAccountOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	where: DiscordAccountWhereInputObjectSchema.optional(),
	cursor: DiscordAccountWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(DiscordAccountScalarFieldEnumSchema).optional(),
});
