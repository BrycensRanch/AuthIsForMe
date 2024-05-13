import { z } from 'zod';
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';

export const ProfileDeleteOneSchema = z.object({ where: ProfileWhereUniqueInputObjectSchema });
