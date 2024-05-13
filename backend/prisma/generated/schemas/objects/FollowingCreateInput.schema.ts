import { z } from 'zod';
import { ProfileCreateNestedOneWithoutFollowingInputObjectSchema } from './ProfileCreateNestedOneWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingCreateInput> = z
	.object({
		User: z.lazy(() => ProfileCreateNestedOneWithoutFollowingInputObjectSchema),
	})
	.strict();

export const FollowingCreateInputObjectSchema = Schema;
