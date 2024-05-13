import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './FollowingWhereUniqueInput.schema';
import { FollowingCreateWithoutUserInputObjectSchema } from './FollowingCreateWithoutUserInput.schema';
import { FollowingUncheckedCreateWithoutUserInputObjectSchema } from './FollowingUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => FollowingWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => FollowingCreateWithoutUserInputObjectSchema),
			z.lazy(() => FollowingUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const FollowingCreateOrConnectWithoutUserInputObjectSchema = Schema;
