import { z } from 'zod';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserCreateManyProfileInputEnvelopeObjectSchema } from './UserCreateManyProfileInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedManyWithoutProfileInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutProfileInputObjectSchema),
				z.lazy(() => UserCreateWithoutProfileInputObjectSchema).array(),
				z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutProfileInputObjectSchema).array(),
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema),
				z.lazy(() => UserCreateOrConnectWithoutProfileInputObjectSchema).array(),
			])
			.optional(),
		createMany: z.lazy(() => UserCreateManyProfileInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
			.optional(),
	})
	.strict();

export const UserCreateNestedManyWithoutProfileInputObjectSchema = Schema;
