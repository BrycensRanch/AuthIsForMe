import { z } from 'zod';
import { UserCreateWithoutMojangAccountInputObjectSchema } from './UserCreateWithoutMojangAccountInput.schema';
import { UserUncheckedCreateWithoutMojangAccountInputObjectSchema } from './UserUncheckedCreateWithoutMojangAccountInput.schema';
import { UserCreateOrConnectWithoutMojangAccountInputObjectSchema } from './UserCreateOrConnectWithoutMojangAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutMojangAccountInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutMojangAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutMojangAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMojangAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
	})
	.strict();

export const UserCreateNestedOneWithoutMojangAccountInputObjectSchema = Schema;
