import { z } from 'zod';
import { ApiKeyOrderByWithRelationInputObjectSchema } from './objects/ApiKeyOrderByWithRelationInput.schema';
import { ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyCountAggregateInputObjectSchema } from './objects/ApiKeyCountAggregateInput.schema';
import { ApiKeyMinAggregateInputObjectSchema } from './objects/ApiKeyMinAggregateInput.schema';
import { ApiKeyMaxAggregateInputObjectSchema } from './objects/ApiKeyMaxAggregateInput.schema';
import { ApiKeyAvgAggregateInputObjectSchema } from './objects/ApiKeyAvgAggregateInput.schema';
import { ApiKeySumAggregateInputObjectSchema } from './objects/ApiKeySumAggregateInput.schema';

export const ApiKeyAggregateSchema = z.object({
	orderBy: z
		.union([ApiKeyOrderByWithRelationInputObjectSchema, ApiKeyOrderByWithRelationInputObjectSchema.array()])
		.optional(),
	where: ApiKeyWhereInputObjectSchema.optional(),
	cursor: ApiKeyWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), ApiKeyCountAggregateInputObjectSchema]).optional(),
	_min: ApiKeyMinAggregateInputObjectSchema.optional(),
	_max: ApiKeyMaxAggregateInputObjectSchema.optional(),
	_avg: ApiKeyAvgAggregateInputObjectSchema.optional(),
	_sum: ApiKeySumAggregateInputObjectSchema.optional(),
});
