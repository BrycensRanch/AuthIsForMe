import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';

export const ApiKeyFindUniqueSchema = z.object({ where: ApiKeyWhereUniqueInputObjectSchema });
