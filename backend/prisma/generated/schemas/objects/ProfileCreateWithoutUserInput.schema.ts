import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';
import { FollowingCreateNestedManyWithoutUserInputObjectSchema } from './FollowingCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = z
	.object({
		createdAt: z.coerce.date().optional(),
		banned: z.boolean().optional(),
		profilePrivate: z.boolean().optional(),
		profileViews: z.number().optional(),
		lastSeen: z.coerce.date().optional(),
		avatar: z.string().optional().nullable(),
		username: z.string(),
		role: z.lazy(() => RoleSchema).optional(),
		biography: z.string().optional().nullable(),
		posts: z.lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
		Following: z.lazy(() => FollowingCreateNestedManyWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const ProfileCreateWithoutUserInputObjectSchema = Schema;
