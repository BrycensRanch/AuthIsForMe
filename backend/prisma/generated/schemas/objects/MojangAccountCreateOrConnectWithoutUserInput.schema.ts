import { z } from 'zod';
import { MojangAccountWhereUniqueInputObjectSchema } from './MojangAccountWhereUniqueInput.schema';
import { MojangAccountCreateWithoutUserInputObjectSchema } from './MojangAccountCreateWithoutUserInput.schema';
import { MojangAccountUncheckedCreateWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => MojangAccountWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => MojangAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => MojangAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const MojangAccountCreateOrConnectWithoutUserInputObjectSchema = Schema;
