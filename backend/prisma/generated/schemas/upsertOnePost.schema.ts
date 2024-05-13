import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUncheckedCreateInputObjectSchema } from './objects/PostUncheckedCreateInput.schema';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostUncheckedUpdateInputObjectSchema } from './objects/PostUncheckedUpdateInput.schema';

export const PostUpsertSchema = z.object({
	where: PostWhereUniqueInputObjectSchema,
	create: z.union([PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema]),
	update: z.union([PostUpdateInputObjectSchema, PostUncheckedUpdateInputObjectSchema]),
});
