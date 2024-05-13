import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';

export const FollowingFindUniqueSchema = z.object({ where: FollowingWhereUniqueInputObjectSchema });
