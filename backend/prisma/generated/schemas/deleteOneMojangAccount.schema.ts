import { z } from 'zod';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';

export const MojangAccountDeleteOneSchema = z.object({ where: MojangAccountWhereUniqueInputObjectSchema });
