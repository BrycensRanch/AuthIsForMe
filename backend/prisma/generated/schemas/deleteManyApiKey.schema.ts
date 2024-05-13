import { z } from 'zod';
import { ApiKeyWhereInputObjectSchema } from './objects/ApiKeyWhereInput.schema';

export const ApiKeyDeleteManySchema = z.object({ where: ApiKeyWhereInputObjectSchema.optional() });
