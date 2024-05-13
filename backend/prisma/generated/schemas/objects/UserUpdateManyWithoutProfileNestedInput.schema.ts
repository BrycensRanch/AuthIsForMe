import { z } from 'zod';
import { UserCreateWithoutProfileInputObjectSchema } from './UserCreateWithoutProfileInput.schema';
import { UserUncheckedCreateWithoutProfileInputObjectSchema } from './UserUncheckedCreateWithoutProfileInput.schema';
import { UserCreateOrConnectWithoutProfileInputObjectSchema } from './UserCreateOrConnectWithoutProfileInput.schema';
import { UserUpsertWithWhereUniqueWithoutProfileInputObjectSchema } from './UserUpsertWithWhereUniqueWithoutProfileInput.schema';
import { UserCreateManyProfileInputEnvelopeObjectSchema } from './UserCreateManyProfileInputEnvelope.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithWhereUniqueWithoutProfileInputObjectSchema } from './UserUpdateWithWhereUniqueWithoutProfileInput.schema';
import { UserUpdateManyWithWhereWithoutProfileInputObjectSchema } from './UserUpdateManyWithWhereWithoutProfileInput.schema';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithoutProfileNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => UserUpsertWithWhereUniqueWithoutProfileInputObjectSchema),
				z.lazy(() => UserUpsertWithWhereUniqueWithoutProfileInputObjectSchema).array(),
			])
			.optional(),
		createMany: z.lazy(() => UserCreateManyProfileInputEnvelopeObjectSchema).optional(),
		set: z
			.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
			.optional(),
		disconnect: z
			.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
			.optional(),
		delete: z
			.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
			.optional(),
		connect: z
			.union([z.lazy(() => UserWhereUniqueInputObjectSchema), z.lazy(() => UserWhereUniqueInputObjectSchema).array()])
			.optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithWhereUniqueWithoutProfileInputObjectSchema),
				z.lazy(() => UserUpdateWithWhereUniqueWithoutProfileInputObjectSchema).array(),
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => UserUpdateManyWithWhereWithoutProfileInputObjectSchema),
				z.lazy(() => UserUpdateManyWithWhereWithoutProfileInputObjectSchema).array(),
			])
			.optional(),
		deleteMany: z
			.union([z.lazy(() => UserScalarWhereInputObjectSchema), z.lazy(() => UserScalarWhereInputObjectSchema).array()])
			.optional(),
	})
	.strict();

export const UserUpdateManyWithoutProfileNestedInputObjectSchema = Schema;
