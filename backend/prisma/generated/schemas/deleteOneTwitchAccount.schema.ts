import { z } from 'zod';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';

export const TwitchAccountDeleteOneSchema = z.object({ where: TwitchAccountWhereUniqueInputObjectSchema });
