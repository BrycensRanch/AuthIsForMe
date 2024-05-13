import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTwitchAccountInputObjectSchema } from './UserCreateWithoutTwitchAccountInput.schema';
import { UserUncheckedCreateWithoutTwitchAccountInputObjectSchema } from './UserUncheckedCreateWithoutTwitchAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTwitchAccountInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutTwitchAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutTwitchAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserCreateOrConnectWithoutTwitchAccountInputObjectSchema = Schema;
