import { z } from 'zod';
import { DiscordAccountWhereUniqueInputObjectSchema } from './DiscordAccountWhereUniqueInput.schema';
import { DiscordAccountCreateWithoutUserInputObjectSchema } from './DiscordAccountCreateWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => DiscordAccountWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => DiscordAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => DiscordAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const DiscordAccountCreateOrConnectWithoutUserInputObjectSchema = Schema;
