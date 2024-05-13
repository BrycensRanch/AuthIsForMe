import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';
import { UserCreateNestedManyWithoutProfileInputObjectSchema } from './UserCreateNestedManyWithoutProfileInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileCreateWithoutFollowingInput> = z
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
		User: z.lazy(() => UserCreateNestedManyWithoutProfileInputObjectSchema).optional(),
	})
	.strict();

export const ProfileCreateWithoutFollowingInputObjectSchema = Schema;
