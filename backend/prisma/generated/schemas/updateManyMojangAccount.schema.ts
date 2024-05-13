import { z } from 'zod';
import { MojangAccountUpdateManyMutationInputObjectSchema } from './objects/MojangAccountUpdateManyMutationInput.schema';
import { MojangAccountWhereInputObjectSchema } from './objects/MojangAccountWhereInput.schema';

export const MojangAccountUpdateManySchema = z.object({
	data: MojangAccountUpdateManyMutationInputObjectSchema,
	where: MojangAccountWhereInputObjectSchema.optional(),
});
