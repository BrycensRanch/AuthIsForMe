import { z } from 'zod';
import { ProfileUpdateOneRequiredWithoutFollowingNestedInputObjectSchema } from './ProfileUpdateOneRequiredWithoutFollowingNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpdateInput> = z
	.object({
		User: z.lazy(() => ProfileUpdateOneRequiredWithoutFollowingNestedInputObjectSchema).optional(),
	})
	.strict();

export const FollowingUpdateInputObjectSchema = Schema;
