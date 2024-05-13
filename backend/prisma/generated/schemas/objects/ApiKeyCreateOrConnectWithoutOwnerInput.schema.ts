import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateWithoutOwnerInputObjectSchema } from './ApiKeyCreateWithoutOwnerInput.schema';
import { ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutOwnerInput> = z
	.object({
		where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema),
			z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema),
		]),
	})
	.strict();

export const ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema = Schema;
