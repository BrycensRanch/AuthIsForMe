import { z } from 'zod';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostUncheckedUpdateInputObjectSchema } from './objects/PostUncheckedUpdateInput.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';

export const PostUpdateOneSchema = z.object({
	data: z.union([PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema]),
	where: PostWhereUniqueInputObjectSchema,
});
