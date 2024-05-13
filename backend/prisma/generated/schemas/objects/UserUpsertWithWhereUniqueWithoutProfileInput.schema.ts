import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutProfileInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => UserUpdateWithoutProfileInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutProfileInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema),
		]),
	})
	.strict();

export const UserUpsertWithWhereUniqueWithoutProfileInputObjectSchema = Schema;
