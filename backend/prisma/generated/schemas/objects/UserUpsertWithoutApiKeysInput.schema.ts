import { z } from 'zod';
import { UserUpdateWithoutApiKeysInputObjectSchema } from './UserUpdateWithoutApiKeysInput.schema';
import { UserUncheckedUpdateWithoutApiKeysInputObjectSchema } from './UserUncheckedUpdateWithoutApiKeysInput.schema';
import { UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutApiKeysInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutApiKeysInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutApiKeysInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema),
		]),
	})
	.strict();

export const UserUpsertWithoutApiKeysInputObjectSchema = Schema;
