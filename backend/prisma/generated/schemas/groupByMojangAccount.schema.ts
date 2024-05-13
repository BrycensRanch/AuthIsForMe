import { z } from 'zod';
import { MojangAccountWhereInputObjectSchema } from './objects/MojangAccountWhereInput.schema';
import { MojangAccountOrderByWithAggregationInputObjectSchema } from './objects/MojangAccountOrderByWithAggregationInput.schema';
import { MojangAccountScalarWhereWithAggregatesInputObjectSchema } from './objects/MojangAccountScalarWhereWithAggregatesInput.schema';
import { MojangAccountScalarFieldEnumSchema } from './enums/MojangAccountScalarFieldEnum.schema';

export const MojangAccountGroupBySchema = z.object({
	where: MojangAccountWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			MojangAccountOrderByWithAggregationInputObjectSchema,
			MojangAccountOrderByWithAggregationInputObjectSchema.array(),
		])
		.optional(),
	having: MojangAccountScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(MojangAccountScalarFieldEnumSchema),
});
