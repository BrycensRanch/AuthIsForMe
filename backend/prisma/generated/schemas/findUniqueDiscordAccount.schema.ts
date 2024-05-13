import { z } from 'zod';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';

export const DiscordAccountFindUniqueSchema = z.object({ where: DiscordAccountWhereUniqueInputObjectSchema });
