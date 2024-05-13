import { z } from 'zod';
import { UserCreateWithoutApiKeysInputObjectSchema } from './UserCreateWithoutApiKeysInput.schema';
import { UserUncheckedCreateWithoutApiKeysInputObjectSchema } from './UserUncheckedCreateWithoutApiKeysInput.schema';
import { UserCreateOrConnectWithoutApiKeysInputObjectSchema } from './UserCreateOrConnectWithoutApiKeysInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutApiKeysInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutApiKeysInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutApiKeysInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApiKeysInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateNestedOneWithoutApiKeysInputObjectSchema = Schema;
