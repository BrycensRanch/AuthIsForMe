import { z } from 'zod';
import { DiscordAccountCreateWithoutUserInputObjectSchema } from './DiscordAccountCreateWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateWithoutUserInput.schema';
import { DiscordAccountCreateOrConnectWithoutUserInputObjectSchema } from './DiscordAccountCreateOrConnectWithoutUserInput.schema';
import { DiscordAccountWhereUniqueInputObjectSchema } from './DiscordAccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountUncheckedCreateNestedOneWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => DiscordAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => DiscordAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => DiscordAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		connect: z.lazy(() => DiscordAccountWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const DiscordAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema;
