import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './FollowingWhereUniqueInput.schema';
import { FollowingUpdateWithoutUserInputObjectSchema } from './FollowingUpdateWithoutUserInput.schema';
import { FollowingUncheckedUpdateWithoutUserInputObjectSchema } from './FollowingUncheckedUpdateWithoutUserInput.schema';
import { FollowingCreateWithoutUserInputObjectSchema } from './FollowingCreateWithoutUserInput.schema';
import { FollowingUncheckedCreateWithoutUserInputObjectSchema } from './FollowingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => FollowingWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => FollowingUpdateWithoutUserInputObjectSchema),
			z.lazy(() => FollowingUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => FollowingCreateWithoutUserInputObjectSchema),
			z.lazy(() => FollowingUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const FollowingUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
