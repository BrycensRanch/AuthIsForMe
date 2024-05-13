import { z } from 'zod';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';

export const MojangAccountFindUniqueSchema = z.object({ where: MojangAccountWhereUniqueInputObjectSchema });
