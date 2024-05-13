import { z } from 'zod';
import { UserCreateWithoutDiscordAccountInputObjectSchema } from './UserCreateWithoutDiscordAccountInput.schema';
import { UserUncheckedCreateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedCreateWithoutDiscordAccountInput.schema';
import { UserCreateOrConnectWithoutDiscordAccountInputObjectSchema } from './UserCreateOrConnectWithoutDiscordAccountInput.schema';
import { UserUpsertWithoutDiscordAccountInputObjectSchema } from './UserUpsertWithoutDiscordAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutDiscordAccountInputObjectSchema } from './UserUpdateWithoutDiscordAccountInput.schema';
import { UserUncheckedUpdateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedUpdateWithoutDiscordAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDiscordAccountNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutDiscordAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutDiscordAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDiscordAccountInputObjectSchema).optional(),
		upsert: z.lazy(() => UserUpsertWithoutDiscordAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutDiscordAccountInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutDiscordAccountInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const UserUpdateOneRequiredWithoutDiscordAccountNestedInputObjectSchema = Schema;
