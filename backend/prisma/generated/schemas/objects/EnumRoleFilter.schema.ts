import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRoleFilter> = z
	.object({
		equals: z.lazy(() => RoleSchema).optional(),
		in: z.union([z.lazy(() => RoleSchema).array(), z.lazy(() => RoleSchema)]).optional(),
		notIn: z.union([z.lazy(() => RoleSchema).array(), z.lazy(() => RoleSchema)]).optional(),
		not: z.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterObjectSchema)]).optional(),
	})
	.strict();

export const EnumRoleFilterObjectSchema = Schema;
