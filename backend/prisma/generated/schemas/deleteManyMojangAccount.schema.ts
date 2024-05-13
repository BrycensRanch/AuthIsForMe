import { z } from 'zod';
import { MojangAccountWhereInputObjectSchema } from './objects/MojangAccountWhereInput.schema';

export const MojangAccountDeleteManySchema = z.object({ where: MojangAccountWhereInputObjectSchema.optional() });
