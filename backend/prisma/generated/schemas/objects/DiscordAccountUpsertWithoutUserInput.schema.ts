import { z } from 'zod';
import { DiscordAccountUpdateWithoutUserInputObjectSchema } from './DiscordAccountUpdateWithoutUserInput.schema';
import { DiscordAccountUncheckedUpdateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedUpdateWithoutUserInput.schema';
import { DiscordAccountCreateWithoutUserInputObjectSchema } from './DiscordAccountCreateWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountUpsertWithoutUserInput> = z
	.object({
		update: z.union([
			z.lazy(() => DiscordAccountUpdateWithoutUserInputObjectSchema),
			z.lazy(() => DiscordAccountUncheckedUpdateWithoutUserInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => DiscordAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => DiscordAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const DiscordAccountUpsertWithoutUserInputObjectSchema = Schema;
