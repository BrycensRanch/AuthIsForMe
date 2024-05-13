import { z } from 'zod';
import { UserCreateWithoutDiscordAccountInputObjectSchema } from './UserCreateWithoutDiscordAccountInput.schema';
import { UserUncheckedCreateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedCreateWithoutDiscordAccountInput.schema';
import { UserCreateOrConnectWithoutDiscordAccountInputObjectSchema } from './UserCreateOrConnectWithoutDiscordAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDiscordAccountInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutDiscordAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutDiscordAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiscordAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateNestedOneWithoutDiscordAccountInputObjectSchema = Schema;
