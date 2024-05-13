import { z } from 'zod';
import { TwitchAccountWhereInputObjectSchema } from './objects/TwitchAccountWhereInput.schema';
import { TwitchAccountOrderByWithAggregationInputObjectSchema } from './objects/TwitchAccountOrderByWithAggregationInput.schema';
import { TwitchAccountScalarWhereWithAggregatesInputObjectSchema } from './objects/TwitchAccountScalarWhereWithAggregatesInput.schema';
import { TwitchAccountScalarFieldEnumSchema } from './enums/TwitchAccountScalarFieldEnum.schema';

export const TwitchAccountGroupBySchema = z.object({
	where: TwitchAccountWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			TwitchAccountOrderByWithAggregationInputObjectSchema,
			TwitchAccountOrderByWithAggregationInputObjectSchema.array(),
		])
		.optional(),
	having: TwitchAccountScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(TwitchAccountScalarFieldEnumSchema),
});
