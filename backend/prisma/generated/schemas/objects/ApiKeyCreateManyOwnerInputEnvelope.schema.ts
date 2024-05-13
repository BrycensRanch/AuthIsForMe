import { z } from 'zod';
import { ApiKeyCreateManyOwnerInputObjectSchema } from './ApiKeyCreateManyOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCreateManyOwnerInputEnvelope> = z
	.object({
		data: z.union([
			z.lazy(() => ApiKeyCreateManyOwnerInputObjectSchema),
			z.lazy(() => ApiKeyCreateManyOwnerInputObjectSchema).array(),
		]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const ApiKeyCreateManyOwnerInputEnvelopeObjectSchema = Schema;
