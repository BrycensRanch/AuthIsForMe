import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutOwnerInputObjectSchema } from './ApiKeyUpdateWithoutOwnerInput.schema';
import { ApiKeyUncheckedUpdateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutOwnerInput> = z
	.object({
		where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => ApiKeyUpdateWithoutOwnerInputObjectSchema),
			z.lazy(() => ApiKeyUncheckedUpdateWithoutOwnerInputObjectSchema),
		]),
	})
	.strict();

export const ApiKeyUpdateWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
