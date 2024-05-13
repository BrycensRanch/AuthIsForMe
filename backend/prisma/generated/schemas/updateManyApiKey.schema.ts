import { z } from 'zod';
import { ApiKeyUpdateManyMutationInputObjectSchema } from './objects/ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';

export const ApiKeyUpdateManySchema = z.object({
	data: ApiKeyUpdateManyMutationInputObjectSchema,
	where: ApiKeyWhereInputObjectSchema.optional(),
});
