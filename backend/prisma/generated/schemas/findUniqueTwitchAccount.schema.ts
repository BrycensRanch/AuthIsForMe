import { z } from 'zod';
import { TwitchAccountWhereUniqueInputObjectSchema } from './objects/TwitchAccountWhereUniqueInput.schema';

export const TwitchAccountFindUniqueSchema = z.object({ where: TwitchAccountWhereUniqueInputObjectSchema });
