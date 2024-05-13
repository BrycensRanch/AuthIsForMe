import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './objects/FollowingWhereUniqueInput.schema';

export const FollowingDeleteOneSchema = z.object({ where: FollowingWhereUniqueInputObjectSchema });
