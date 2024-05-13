import { z } from 'zod';
import { FollowingWhereInputObjectSchema } from './objects/FollowingWhereInput.schema';

export const FollowingDeleteManySchema = z.object({ where: FollowingWhereInputObjectSchema.optional() });
