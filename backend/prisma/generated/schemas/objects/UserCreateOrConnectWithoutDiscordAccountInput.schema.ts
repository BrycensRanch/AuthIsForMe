import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDiscordAccountInputObjectSchema } from './UserCreateWithoutDiscordAccountInput.schema';
import { UserUncheckedCreateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedCreateWithoutDiscordAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDiscordAccountInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutDiscordAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutDiscordAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserCreateOrConnectWithoutDiscordAccountInputObjectSchema = Schema;
