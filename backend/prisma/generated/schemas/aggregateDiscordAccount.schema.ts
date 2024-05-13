import { z } from 'zod';
import { DiscordAccountOrderByWithRelationInputObjectSchema } from './objects/DiscordAccountOrderByWithRelationInput.schema';
import { DiscordAccountWhereInputObjectSchema } from './objects/DiscordAccountWhereInput.schema';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';
import { DiscordAccountCountAggregateInputObjectSchema } from './objects/DiscordAccountCountAggregateInput.schema';
import { DiscordAccountMinAggregateInputObjectSchema } from './objects/DiscordAccountMinAggregateInput.schema';
import { DiscordAccountMaxAggregateInputObjectSchema } from './objects/DiscordAccountMaxAggregateInput.schema';
import { DiscordAccountAvgAggregateInputObjectSchema } from './objects/DiscordAccountAvgAggregateInput.schema';
import { DiscordAccountSumAggregateInputObjectSchema } from './objects/DiscordAccountSumAggregateInput.schema';

export const DiscordAccountAggregateSchema = z.object({
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
	_count: z.union([z.literal(true), DiscordAccountCountAggregateInputObjectSchema]).optional(),
	_min: DiscordAccountMinAggregateInputObjectSchema.optional(),
	_max: DiscordAccountMaxAggregateInputObjectSchema.optional(),
	_avg: DiscordAccountAvgAggregateInputObjectSchema.optional(),
	_sum: DiscordAccountSumAggregateInputObjectSchema.optional(),
});
