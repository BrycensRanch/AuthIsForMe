import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostFindUniqueSchema = z.object({ where: PostWhereUniqueInputObjectSchema });
