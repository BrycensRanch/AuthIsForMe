import { z } from 'zod';
import { DiscordAccountWhereUniqueInputObjectSchema } from './objects/DiscordAccountWhereUniqueInput.schema';

export const DiscordAccountDeleteOneSchema = z.object({ where: DiscordAccountWhereUniqueInputObjectSchema });
