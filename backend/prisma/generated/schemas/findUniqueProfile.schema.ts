import { z } from 'zod';
import { ProfileWhereUniqueInputObjectSchema } from './objects/ProfileWhereUniqueInput.schema';

export const ProfileFindUniqueSchema = z.object({ where: ProfileWhereUniqueInputObjectSchema });
