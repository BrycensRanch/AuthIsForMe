import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { FollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FollowingUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserUncheckedCreateNestedManyWithoutProfileInputObjectSchema } from './UserUncheckedCreateNestedManyWithoutProfileInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutPostsInput> = z
	.object({
		profileId: z.number().optional(),
		createdAt: z.coerce.date().optional(),
		banned: z.boolean().optional(),
		profilePrivate: z.boolean().optional(),
		profileViews: z.number().optional(),
		lastSeen: z.coerce.date().optional(),
		avatar: z.string().optional().nullable(),
		username: z.string(),
		role: z.lazy(() => RoleSchema).optional(),
		biography: z.string().optional().nullable(),
		Following: z.lazy(() => FollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
		User: z.lazy(() => UserUncheckedCreateNestedManyWithoutProfileInputObjectSchema).optional(),
	})
	.strict();

export const ProfileUncheckedCreateWithoutPostsInputObjectSchema = Schema;
