import { z } from 'zod';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUncheckedCreateInputObjectSchema } from './objects/PostUncheckedCreateInput.schema';

export const PostCreateOneSchema = z.object({
	data: z.union([PostCreateInputObjectSchema, PostUncheckedCreateInputObjectSchema]),
});
