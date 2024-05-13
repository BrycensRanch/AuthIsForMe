import { z } from 'zod';
import { UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';
import { UserCreateOrConnectWithoutApiKeysInputObjectSchema } from './UserCreateOrConnectWithoutApiKeysInput.schema';
import { UserUpsertWithoutApiKeysInputObjectSchema } from './UserUpsertWithoutApiKeysInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutApiKeysInputObjectSchema } from './UserUpdateWithoutApiKeysInput.schema';
import { UserUncheckedUpdateWithoutApiKeysInputObjectSchema } from './UserUncheckedUpdateWithoutApiKeysInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutApiKeysNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
		upsert: z.lazy(() => UserUpsertWithoutApiKeysInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutApiKeysInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutApiKeysInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const UserUpdateOneRequiredWithoutApiKeysNestedInputObjectSchema = Schema;
