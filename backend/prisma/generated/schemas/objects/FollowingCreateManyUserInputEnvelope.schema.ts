import { z } from 'zod';
import { FollowingCreateManyUserInputObjectSchema } from './FollowingCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingCreateManyUserInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => FollowingCreateManyUserInputObjectSchema),
			z.lazy(() => FollowingCreateManyUserInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const FollowingCreateManyUserInputEnvelopeObjectSchema = Schema;
