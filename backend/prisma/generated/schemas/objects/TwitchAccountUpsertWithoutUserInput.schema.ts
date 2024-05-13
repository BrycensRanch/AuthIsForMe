import { z } from 'zod';
import { TwitchAccountUpdateWithoutUserInputObjectSchema } from './TwitchAccountUpdateWithoutUserInput.schema';
import { TwitchAccountUncheckedUpdateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedUpdateWithoutUserInput.schema';
import { TwitchAccountCreateWithoutUserInputObjectSchema } from './TwitchAccountCreateWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => TwitchAccountUpdateWithoutUserInputObjectSchema),
			z.lazy(() => TwitchAccountUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => TwitchAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => TwitchAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const TwitchAccountUpsertWithoutUserInputObjectSchema = Schema;
