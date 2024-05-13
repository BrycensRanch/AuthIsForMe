import { z } from 'zod';
import { TwitchAccountCreateWithoutUserInputObjectSchema } from './TwitchAccountCreateWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateWithoutUserInput.schema';
import { TwitchAccountCreateOrConnectWithoutUserInputObjectSchema } from './TwitchAccountCreateOrConnectWithoutUserInput.schema';
import { TwitchAccountUpsertWithoutUserInputObjectSchema } from './TwitchAccountUpsertWithoutUserInput.schema';
import { TwitchAccountWhereUniqueInputObjectSchema } from './TwitchAccountWhereUniqueInput.schema';
import { TwitchAccountUpdateWithoutUserInputObjectSchema } from './TwitchAccountUpdateWithoutUserInput.schema';
import { TwitchAccountUncheckedUpdateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountUpdateOneWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => TwitchAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => TwitchAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => TwitchAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		upsert: z.lazy(() => TwitchAccountUpsertWithoutUserInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => TwitchAccountWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => TwitchAccountUpdateWithoutUserInputObjectSchema),
				z.lazy(() => TwitchAccountUncheckedUpdateWithoutUserInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const TwitchAccountUpdateOneWithoutUserNestedInputObjectSchema = Schema;
