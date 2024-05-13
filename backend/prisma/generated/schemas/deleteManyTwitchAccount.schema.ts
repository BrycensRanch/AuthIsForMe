import { z } from 'zod';
import { TwitchAccountWhereInputObjectSchema } from './objects/TwitchAccountWhereInput.schema';

export const TwitchAccountDeleteManySchema = z.object({ where: TwitchAccountWhereInputObjectSchema.optional() });
