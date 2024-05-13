import { z } from 'zod';
import { UserCreateWithoutTwitchAccountInputObjectSchema } from './UserCreateWithoutTwitchAccountInput.schema';
import { UserUncheckedCreateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedCreateWithoutTwitchAccountInput.schema';
import { UserCreateOrConnectWithoutTwitchAccountInputObjectSchema } from './UserCreateOrConnectWithoutTwitchAccountInput.schema';
import { UserUpsertWithoutTwitchAccountInputObjectSchema } from './UserUpsertWithoutTwitchAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutTwitchAccountInputObjectSchema } from './UserUpdateWithoutTwitchAccountInput.schema';
import { UserUncheckedUpdateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedUpdateWithoutTwitchAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTwitchAccountNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutTwitchAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutTwitchAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwitchAccountInputObjectSchema).optional(),
		upsert: z.lazy(() => UserUpsertWithoutTwitchAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutTwitchAccountInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutTwitchAccountInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const UserUpdateOneRequiredWithoutTwitchAccountNestedInputObjectSchema = Schema;
