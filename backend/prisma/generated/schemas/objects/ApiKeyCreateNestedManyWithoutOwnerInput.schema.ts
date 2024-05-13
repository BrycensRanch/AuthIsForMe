import { z } from 'zod';
import { ApiKeyCreateWithoutOwnerInputObjectSchema } from './ApiKeyCreateWithoutOwnerInput.schema';
import { ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema } from './ApiKeyUncheckedCreateWithoutOwnerInput.schema';
import { ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema } from './ApiKeyCreateOrConnectWithoutOwnerInput.schema';
import { ApiKeyCreateManyOwnerInputEnvelopeObjectSchema } from './ApiKeyCreateManyOwnerInputEnvelope.schema';
import { ApiKeyWhereUniqueInputObjectSchema } from './ApiKeyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ApiKeyCreateNestedManyWithoutOwnerInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyCreateWithoutOwnerInputObjectSchema).array(),
				z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyUncheckedCreateWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema),
				z.lazy(() => ApiKeyCreateOrConnectWithoutOwnerInputObjectSchema).array(),
			])
			.optional(),
		createMany: z.lazy(() => ApiKeyCreateManyOwnerInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema),
				z.lazy(() => ApiKeyWhereUniqueInputObjectSchema).array(),
			])
			.optional(),
	})
	.strict();

export const ApiKeyCreateNestedManyWithoutOwnerInputObjectSchema = Schema;
