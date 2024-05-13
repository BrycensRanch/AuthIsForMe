import { z } from 'zod';
import { FollowingWhereUniqueInputObjectSchema } from './FollowingWhereUniqueInput.schema';
import { FollowingUpdateWithoutUserInputObjectSchema } from './FollowingUpdateWithoutUserInput.schema';
import { FollowingUncheckedUpdateWithoutUserInputObjectSchema } from './FollowingUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => FollowingWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => FollowingUpdateWithoutUserInputObjectSchema),
			z.lazy(() => FollowingUncheckedUpdateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const FollowingUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
