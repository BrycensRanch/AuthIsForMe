import { z } from 'zod';
import { FollowingCreateWithoutUserInputObjectSchema } from './FollowingCreateWithoutUserInput.schema';
import { FollowingUncheckedCreateWithoutUserInputObjectSchema } from './FollowingUncheckedCreateWithoutUserInput.schema';
import { FollowingCreateOrConnectWithoutUserInputObjectSchema } from './FollowingCreateOrConnectWithoutUserInput.schema';
import { FollowingCreateManyUserInputEnvelopeObjectSchema } from './FollowingCreateManyUserInputEnvelope.schema';
import { FollowingWhereUniqueInputObjectSchema } from './FollowingWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingCreateNestedManyWithoutUserInput> = z
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
		createMany: z.lazy(() => FollowingCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => FollowingWhereUniqueInputObjectSchema),
				z.lazy(() => FollowingWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
	})
	.strict();

export const FollowingCreateNestedManyWithoutUserInputObjectSchema = Schema;
