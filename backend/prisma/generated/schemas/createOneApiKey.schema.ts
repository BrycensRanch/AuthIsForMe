import { z } from 'zod';
import { ApiKeyCreateInputObjectSchema } from './objects/ApiKeyCreateInput.schema';
import { ApiKeyUncheckedCreateInputObjectSchema } from './objects/ApiKeyUncheckedCreateInput.schema';

export const ApiKeyCreateOneSchema = z.object({
	data: z.union([ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema]),
});
