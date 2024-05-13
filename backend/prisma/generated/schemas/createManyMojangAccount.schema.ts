import { z } from 'zod';
import { MojangAccountCreateManyInputObjectSchema } from './objects/MojangAccountCreateManyInput.schema';

export const MojangAccountCreateManySchema = z.object({
	data: z.union([MojangAccountCreateManyInputObjectSchema, z.array(MojangAccountCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional(),
});
