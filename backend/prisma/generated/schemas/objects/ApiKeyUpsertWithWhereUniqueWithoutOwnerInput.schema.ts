import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';
import { ApiKeyUpdateWithoutOwnerInputObjectSchema } from './ApiKeyUpdateWithoutOwnerInput.schema';
import { ApiKeyUncheckedUpdateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedUpdateWithoutOwnerInput.schema';
import { ApiKeyCreateWithoutOwnerInputObjectSchema } from './ApiKeyCreateWithoutOwnerInput.schema';
import { ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutOwnerInput> = z
	.object({
		where: z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => ApiKeyUpdateWithoutOwnerInputObjectSchema),
			z.lazy(() => ApiKeyUncheckedUpdateWithoutOwnerInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema),
			z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema),
		]),
	})
	.strict();

export const ApiKeyUpsertWithWhereUniqueWithoutOwnerInputObjectSchema = Schema;
