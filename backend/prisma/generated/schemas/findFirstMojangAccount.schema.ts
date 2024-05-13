import { z } from 'zod';
import { MojangAccountOrderByWithRelationInputObjectSchema } from './objects/MojangAccountOrderByWithRelationInput.schema';
import { MojangAccountWhereInputObjectSchema } from './objects/MojangAccountWhereInput.schema';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';
import { MojangAccountScalarFieldEnumSchema } from './enums/MojangAccountScalarFieldEnum.schema';

export const MojangAccountFindFirstSchema = z.object({
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
	distinct: z.array(MojangAccountScalarFieldEnumSchema).optional(),
});
