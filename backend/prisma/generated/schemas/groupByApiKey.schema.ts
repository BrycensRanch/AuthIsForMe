import { z } from 'zod';
import { ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';
import { ApiKeyOrderByWithAggregationInputObjectSchema } from './objects/ApiKeyOrderByWithAggregationInput.schema';
import { ApiKeyScalarWhereWithAggregatesInputObjectSchema } from './objects/ApiKeyScalarWhereWithAggregatesInput.schema';
import { ApiKeyScalarFieldEnumSchema } from './enums/ApiKeyScalarFieldEnum.schema';

export const ApiKeyGroupBySchema = z.object({
	where: ApiKeyWhereInputObjectSchema.optional(),
	orderBy: z
		.union([ApiKeyOrderByWithAggregationInputObjectSchema, ApiKeyOrderByWithAggregationInputObjectSchema.array()])
		.optional(),
	having: ApiKeyScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ApiKeyScalarFieldEnumSchema),
});
