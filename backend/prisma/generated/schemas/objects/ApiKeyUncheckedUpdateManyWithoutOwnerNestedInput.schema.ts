import { z } from 'zod';
import { ApiKeyCreateWithoutOwnerInputObjectSchema } from './ApiKeyCreateWithoutOwnerInput.schema';
import { ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOwnerInput.schema';
import { ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema } from './ApiKeyCreateOrConnectWithoutOwnerInput.schema';
import { ApiKeyUpsertWithWhereUniqueWithoutOwnerInputObjectSchema } from './ApiKeyUpsertWithWhereUniqueWithoutOwnerInput.schema';
import { ApiKeyCreateManyOwnerInputEnvelopeObjectSchema } from './ApiKeyCreateManyOwnerInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithWhereUniqueWithoutOwnerInputObjectSchema } from './ApiKeyUpdateWithWhereUniqueWithoutOwnerInput.schema';
import { ApiKeyUpdateManyWithWhereWithoutOwnerInputObjectSchema } from './ApiKeyUpdateManyWithWhereWithoutOwnerInput.schema';
import { ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUncheckedUpdateManyWithoutOwnerNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema).array(),
				z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		createMany: z.lazy(() => ApiKeyCreateManyOwnerInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => ApiKeyUpdateManyWithWhereWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyUpdateManyWithWhereWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
				z.lazy(() => ApiKeyScalarWhereInputObjectSchema).array(),
			])
			.optional(),
	})
	.strict();

export const ApiKeyUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema = Schema;
