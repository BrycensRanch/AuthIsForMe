import { z } from 'zod';
import { TwitchAccountCreateWithoutUserInputObjectSchema } from './TwitchAccountCreateWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateWithoutUserInput.schema';
import { TwitchAccountCreateOrConnectWithoutUserInputObjectSchema } from './TwitchAccountCreateOrConnectWithoutUserInput.schema';
import { TwitchAccountWhereUniqueInputObjectSchema } from './TwitchAccountWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountUncheckedCreateNestedOneWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => TwitchAccountCreateWithoutUserInputObjectSchema),
				z.lazy(() => TwitchAccountUncheckedCreateWithoutUserInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => TwitchAccountCreateOrConnectWithoutUserInputObjectSchema).optional(),
		connect: z.lazy(() => TwitchAccountWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const TwitchAccountUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema;
