import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';
import { FollowingListRelationFilterObjectSchema } from './FollowingListRelationFilter.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()])
			.optional(),
		OR: z
			.lazy(() => ProfileWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => ProfileWhereInputObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema).array()])
			.optional(),
		profileId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		banned: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		profilePrivate: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		profileViews: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		lastSeen: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
		avatar: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), z.lazy(() => RoleSchema)]).optional(),
		biography: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		posts: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
		Following: z.lazy(() => FollowingListRelationFilterObjectSchema).optional(),
		User: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
	})
	.strict();

export const ProfileWhereInputObjectSchema = Schema;
