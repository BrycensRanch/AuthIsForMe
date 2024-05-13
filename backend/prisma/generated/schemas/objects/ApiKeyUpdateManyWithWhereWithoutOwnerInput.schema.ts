import { z } from 'zod';
import { ApiKeyScalarWhereInputObjectSchema } from './ApiKeyScalarWhereInput.schema';
import { ApiKeyUpdateManyMutationInputObjectSchema } from './ApiKeyUpdateManyMutationInput.schema';
import { ApiKeyUncheckedUpdateManyWithoutApiKeysInputObjectSchema } from './ApiKeyUncheckedUpdateManyWithoutApiKeysInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutOwnerInput> = z
	.object({
		where: z.lazy(() => ApiKeyScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => ApiKeyUpdateManyMutationInputObjectSchema),
			z.lazy(() => ApiKeyUncheckedUpdateManyWithoutApiKeysInputObjectSchema),
		]),
	})
	.strict();

export const ApiKeyUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema;
