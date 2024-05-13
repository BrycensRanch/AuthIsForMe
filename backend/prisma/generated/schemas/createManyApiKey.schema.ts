import { z } from 'zod';
import { ApiKeyCreateManyInputObjectSchema } from './objects/ApiKeyCreateManyInput.schema';

export const ApiKeyCreateManySchema = z.object({
	data: z.union([ApiKeyCreateManyInputObjectSchema, z.array(ApiKeyCreateManyInputObjectSchema)]),
	skipDuplicates: z.boolean().optional(),
});
