import { z } from 'zod';
import { DiscordAccountWhereInputObjectSchema } from './objects/DiscordAccountWhereInput.schema';

export const DiscordAccountDeleteManySchema = z.object({ where: DiscordAccountWhereInputObjectSchema.optional() });
