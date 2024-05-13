import { z } from 'zod';
import { ApiKeyUpdateInputObjectSchema } from './objects/ApiKeyUpdateInput.schema';
import { ApiKeyUncheckedUpdateInputObjectSchema } from './objects/ApiKeyUncheckedUpdateInput.schema';
import { ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyUpdateOneSchema = z.object({
	data: z.union([ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema]),
	where: ApiKeyWhereUniqueInputObjectSchema,
});
