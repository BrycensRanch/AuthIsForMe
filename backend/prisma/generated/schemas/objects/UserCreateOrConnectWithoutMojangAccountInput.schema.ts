import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutMojangAccountInputObjectSchema } from './UserCreateWithoutMojangAccountInput.schema';
import { UserUncheckedCreateWithoutMojangAccountInputObjectSchema } from './UserUncheckedCreateWithoutMojangAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutMojangAccountInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutMojangAccountInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutMojangAccountInputObjectSchema),
		]),
	})
	.strict();

export const UserCreateOrConnectWithoutMojangAccountInputObjectSchema = Schema;
