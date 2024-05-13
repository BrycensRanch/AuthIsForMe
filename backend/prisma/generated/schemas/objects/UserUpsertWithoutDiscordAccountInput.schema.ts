import { z } from 'zod';
import { UserUpdateWithoutDiscordAccountInputObjectSchema } from './UserUpdateWithoutDiscordAccountInput.schema';
import { UserUncheckedUpdateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedUpdateWithoutDiscordAccountInput.schema';
import { UserCreateWithoutDiscordAccountInputObjectSchema } from './UserCreateWithoutDiscordAccountInput.schema';
import { UserUncheckedCreateWithoutDiscordAccountInputObjectSchema } from './UserUncheckedCreateWithoutDiscordAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutDiscordAccountInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutDiscordAccountInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutDiscordAccountInputObjectSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutDiscordAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutDiscordAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserUpsertWithoutDiscordAccountInputObjectSchema = Schema;
