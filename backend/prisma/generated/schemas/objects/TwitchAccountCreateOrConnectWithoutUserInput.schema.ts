import { z } from 'zod';
import { TwitchAccountWhereUniqueInputObjectSchema } from './TwitchAccountWhereUniqueInput.schema';
import { TwitchAccountCreateWithoutUserInputObjectSchema } from './TwitchAccountCreateWithoutUserInput.schema';
import { TwitchAccountUncheckedCreateWithoutUserInputObjectSchema } from './TwitchAccountUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TwitchAccountCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => TwitchAccountWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => TwitchAccountCreateWithoutUserInputObjectSchema),
			z.lazy(() => TwitchAccountUncheckedCreateWithoutUserInputObjectSchema),
		]),
	})
	.strict();

export const TwitchAccountCreateOrConnectWithoutUserInputObjectSchema = Schema;
