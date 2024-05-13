import { z } from 'zod';
import { FollowingCreateWithoutUserInputObjectSchema } from './FollowingCreateWithoutUserInput.schema';
import { FollowingUncheckedCreateWithoutUserInputObjectSchema } from './FollowingUncheckedCreateWithoutUserInput.schema';
import { FollowingCreateOrConnectWithoutUserInputObjectSchema } from './FollowingCreateOrConnectWithoutUserInput.schema';
import { FollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FollowingUpsertWithWhereUniqueWithoutUserInput.schema';
import { FollowingCreateManyUserInputEnvelopeObjectSchema } from './FollowingCreateManyUserInputEnvelope.schema';
import { FollowingWhereUniqueInputObjectSchema } from './FollowingWhereUniqueInput.schema';
import { FollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FollowingUpdateWithWhereUniqueWithoutUserInput.schema';
import { FollowingUpdateManyWithWhereWithoutUserInputObjectSchema } from './FollowingUpdateManyWithWhereWithoutUserInput.schema';
import { FollowingScalarWhereInputObjectSchema } from './FollowingScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUncheckedUpdateManyWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => FollowingCreateWithoutUserInputObjectSchema),
				z.lazy(() => FollowingCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => FollowingUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => FollowingUncheckedCreateWithoutUserInputObjectSchema).array(),
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => FollowingCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => FollowingCreateOrConnectWithoutUserInputObjectSchema).array(),
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => FollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => FollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
			])
			.optional(),
		createMany: z.lazy(() => FollowingCreateManyUserInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => FollowingWhereUniqueInputObjectSchema),
				z.lazy(() => FollowingWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => FollowingWhereUniqueInputObjectSchema),
				z.lazy(() => FollowingWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => FollowingWhereUniqueInputObjectSchema),
				z.lazy(() => FollowingWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => FollowingWhereUniqueInputObjectSchema),
				z.lazy(() => FollowingWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => FollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => FollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => FollowingUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => FollowingUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => FollowingScalarWhereInputObjectSchema),
				z.lazy(() => FollowingScalarWhereInputObjectSchema).array(),
			])
			.optional(),
	})
	.strict();

export const FollowingUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
