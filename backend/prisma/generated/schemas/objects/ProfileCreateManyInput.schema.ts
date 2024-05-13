import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProfileCreateManyInput> = z
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
	})
	.strict();

export const ProfileCreateManyInputObjectSchema = Schema;
