import { z } from 'zod';
import { MojangAccountCreateWithoutUserInputObjectSchema } from './MojangAccountCreateWithoutUserInput.schema';
import { MojangAccountUncheckedCreateWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateWithoutUserInput.schema';
import { MojangAccountCreateOrConnectWithoutUserInputObjectSchema } from './MojangAccountCreateOrConnectWithoutUserInput.schema';
import { MojangAccountWhereUniqueInputObjectSchema } from './MojangAccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountUncheckedCreateNestedOneWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => MojangAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => MojangAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => MojangAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		connect: z.lazy(() => MojangAccountWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const MojangAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema;
