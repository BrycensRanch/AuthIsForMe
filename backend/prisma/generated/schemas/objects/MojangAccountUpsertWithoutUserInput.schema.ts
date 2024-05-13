import { z } from 'zod';
import { MojangAccountUpdateWithoutUserInputObjectSchema } from './MojangAccountUpdateWithoutUserInput.schema';
import { MojangAccountUncheckedUpdateWithoutUserInputObjectSchema } from './MojangAccountUncheckedUpdateWithoutUserInput.schema';
import { MojangAccountCreateWithoutUserInputObjectSchema } from './MojangAccountCreateWithoutUserInput.schema';
import { MojangAccountUncheckedCreateWithoutUserInputObjectSchema } from './MojangAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => MojangAccountUpdateWithoutUserInputObjectSchema),
			z.lazy(() => MojangAccountUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => MojangAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => MojangAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const MojangAccountUpsertWithoutUserInputObjectSchema = Schema;
