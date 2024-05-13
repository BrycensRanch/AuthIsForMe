import { z } from 'zod';
import { DiscordAccountWhereInputObjectSchema } from './objects/DiscordAccountWhereInput.schema';
import { DiscordAccountOrderByWithAggregationInputObjectSchema } from './objects/DiscordAccountOrderByWithAggregationInput.schema';
import { DiscordAccountScalarWhereWithAggregatesInputObjectSchema } from './objects/DiscordAccountScalarWhereWithAggregatesInput.schema';
import { DiscordAccountScalarFieldEnumSchema } from './enums/DiscordAccountScalarFieldEnum.schema';

export const DiscordAccountGroupBySchema = z.object({
	where: DiscordAccountWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			DiscordAccountOrderByWithAggregationInputObjectSchema,
			DiscordAccountOrderByWithAggregationInputObjectSchema.array(),
		])
		.optional(),
	having: DiscordAccountScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(DiscordAccountScalarFieldEnumSchema),
});
