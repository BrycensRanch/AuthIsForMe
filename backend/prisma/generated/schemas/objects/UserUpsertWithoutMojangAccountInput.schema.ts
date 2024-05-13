import { z } from 'zod';
import { UserUpdateWithoutMojangAccountInputObjectSchema } from './UserUpdateWithoutMojangAccountInput.schema';
import { UserUncheckedUpdateWithoutMojangAccountInputObjectSchema } from './UserUncheckedUpdateWithoutMojangAccountInput.schema';
import { UserCreateWithoutMojangAccountInputObjectSchema } from './UserCreateWithoutMojangAccountInput.schema';
import { UserUncheckedCreateWithoutMojangAccountInputObjectSchema } from './UserUncheckedCreateWithoutMojangAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutMojangAccountInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutMojangAccountInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutMojangAccountInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutMojangAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutMojangAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserUpsertWithoutMojangAccountInputObjectSchema = Schema;
