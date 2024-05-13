import { z } from 'zod';
import { UserCreateManyProfileInputObjectSchema } from './UserCreateManyProfileInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateManyProfileInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => UserCreateManyProfileInputObjectSchema),
			z.lazy(() => UserCreateManyProfileInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const UserCreateManyProfileInputEnvelopeObjectSchema = Schema;
