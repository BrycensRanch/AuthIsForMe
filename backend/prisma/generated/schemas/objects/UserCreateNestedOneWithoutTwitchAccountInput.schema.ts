import { z } from 'zod';
import { UserCreateWithoutTwitchAccountInputObjectSchema } from './UserCreateWithoutTwitchAccountInput.schema';
import { UserUncheckedCreateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedCreateWithoutTwitchAccountInput.schema';
import { UserCreateOrConnectWithoutTwitchAccountInputObjectSchema } from './UserCreateOrConnectWithoutTwitchAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTwitchAccountInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutTwitchAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutTwitchAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTwitchAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateNestedOneWithoutTwitchAccountInputObjectSchema = Schema;
