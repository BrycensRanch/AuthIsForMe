import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostDeleteOneSchema = z.object({ where: PostWhereUniqueInputObjectSchema });
