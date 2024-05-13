import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyDeleteOneSchema = z.object({ where: ApiKeyWhereUniqueInputObjectSchema });
