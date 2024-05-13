import { z } from 'zod';
import { DiscordAccountCreateWithoutUserInputObjectSchema } from './DiscordAccountCreateWithoutUserInput.schema';
import { DiscordAccountUncheckedCreateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedCreateWithoutUserInput.schema';
import { DiscordAccountCreateOrConnectWithoutUserInputObjectSchema } from './DiscordAccountCreateOrConnectWithoutUserInput.schema';
import { DiscordAccountUpsertWithoutUserInputObjectSchema } from './DiscordAccountUpsertWithoutUserInput.schema';
import { DiscordAccountWhereUniqueInputObjectSchema } from './DiscordAccountWhereUniqueInput.schema';
import { DiscordAccountUpdateWithoutUserInputObjectSchema } from './DiscordAccountUpdateWithoutUserInput.schema';
import { DiscordAccountUncheckedUpdateWithoutUserInputObjectSchema } from './DiscordAccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiscordAccountUpdateOneWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => DiscordAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => DiscordAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => DiscordAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		upsert: z.lazy(() => DiscordAccountUpsertWithoutUserInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => DiscordAccountWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => DiscordAccountUpdateWithoutUserInputObjectSchema),
				z.lazy(() => DiscordAccountUncheckedUpdateWithoutUserInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const DiscordAccountUpdateOneWithoutUserNestedInputObjectSchema = Schema;
