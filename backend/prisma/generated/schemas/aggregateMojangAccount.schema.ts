import { z } from 'zod';
import { MojangAccountOrderByWithRelationInputObjectSchema } from './objects/MojangAccountOrderByWithRelationInput.schema';
import { MojangAccountWhereInputObjectSchema } from './objects/MojangAccountWhereInput.schema';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';
import { MojangAccountCountAggregateInputObjectSchema } from './objects/MojangAccountCountAggregateInput.schema';
import { MojangAccountMinAggregateInputObjectSchema } from './objects/MojangAccountMinAggregateInput.schema';
import { MojangAccountMaxAggregateInputObjectSchema } from './objects/MojangAccountMaxAggregateInput.schema';
import { MojangAccountAvgAggregateInputObjectSchema } from './objects/MojangAccountAvgAggregateInput.schema';
import { MojangAccountSumAggregateInputObjectSchema } from './objects/MojangAccountSumAggregateInput.schema';

export const MojangAccountAggregateSchema = z.object({
	orderBy: z
		.union([
			MojangAccountOrderByWithRelationInputObjectSchema,
			MojangAccountOrderByWithRelationInputObjectSchema.array(),
		])
		.optional(),
	where: MojangAccountWhereInputObjectSchema.optional(),
	cursor: MojangAccountWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), MojangAccountCountAggregateInputObjectSchema]).optional(),
	_min: MojangAccountMinAggregateInputObjectSchema.optional(),
	_max: MojangAccountMaxAggregateInputObjectSchema.optional(),
	_avg: MojangAccountAvgAggregateInputObjectSchema.optional(),
	_sum: MojangAccountSumAggregateInputObjectSchema.optional(),
});
