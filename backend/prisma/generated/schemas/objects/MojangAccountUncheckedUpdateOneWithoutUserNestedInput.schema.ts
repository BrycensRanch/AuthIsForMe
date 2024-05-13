import { z } from 'zod';
import { MojangAccountCreateWithoutUserInputObjectSchema } from './MojangAccountCreateWithoutUserInput.schema';
import { MojangAccountUncheckedCreateWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateWithoutUserInput.schema';
import { MojangAccountCreateOrConnectWithoutUserInputObjectSchema } from './MojangAccountCreateOrConnectWithoutUserInput.schema';
import { MojangAccountUpsertWithoutUserInputObjectSchema } from './MojangAccountUpsertWithoutUserInput.schema';
import { MojangAccountWhereUniqueInputObjectSchema } from './MojangAccountWhereUniqueInput.schema';
import { MojangAccountUpdateWithoutUserInputObjectSchema } from './MojangAccountUpdateWithoutUserInput.schema';
import { MojangAccountUncheckedUpdateWithoutUserInputObjectSchema } from './MojangAccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountUncheckedUpdateOneWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => MojangAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => MojangAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => MojangAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		upsert: z.lazy(() => MojangAccountUpsertWithoutUserInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => MojangAccountWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => MojangAccountUpdateWithoutUserInputObjectSchema),
				z.lazy(() => MojangAccountUncheckedUpdateWithoutUserInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const MojangAccountUncheckedUpdateOneWithoutUserNestedInputObjectSchema = Schema;
