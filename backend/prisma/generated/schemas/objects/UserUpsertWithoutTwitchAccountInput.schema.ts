import { z } from 'zod';
import { UserUpdateWithoutTwitchAccountInputObjectSchema } from './UserUpdateWithoutTwitchAccountInput.schema';
import { UserUncheckedUpdateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedUpdateWithoutTwitchAccountInput.schema';
import { UserCreateWithoutTwitchAccountInputObjectSchema } from './UserCreateWithoutTwitchAccountInput.schema';
import { UserUncheckedCreateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedCreateWithoutTwitchAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutTwitchAccountInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutTwitchAccountInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutTwitchAccountInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutTwitchAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutTwitchAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserUpsertWithoutTwitchAccountInputObjectSchema = Schema;
