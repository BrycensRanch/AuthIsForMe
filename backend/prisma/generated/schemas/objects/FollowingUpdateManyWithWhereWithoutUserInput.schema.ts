import { z } from 'zod';
import { FollowingScalarWhereInputObjectSchema } from './FollowingScalarWhereInput.schema';
import { FollowingUpdateManyMutationInputObjectSchema } from './FollowingUpdateManyMutationInput.schema';
import { FollowingUncheckedUpdateManyWithoutFollowingInputObjectSchema } from './FollowingUncheckedUpdateManyWithoutFollowingInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpdateManyWithWhereWithoutUserInput> = z
	.object({
		where: z.lazy(() => FollowingScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => FollowingUpdateManyMutationInputObjectSchema),
			z.lazy(() => FollowingUncheckedUpdateManyWithoutFollowingInputObjectSchema),
		]),
	})
	.strict();

export const FollowingUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
