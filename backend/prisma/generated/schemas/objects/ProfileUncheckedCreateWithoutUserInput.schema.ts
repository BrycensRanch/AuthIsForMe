import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';
import { FollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FollowingUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = z
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
		posts: z.lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema).optional(),
		Following: z.lazy(() => FollowingUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
	})
	.strict();

export const ProfileUncheckedCreateWithoutUserInputObjectSchema = Schema;
