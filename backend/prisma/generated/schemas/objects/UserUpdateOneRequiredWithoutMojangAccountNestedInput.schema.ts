import { z } from 'zod';
import { UserCreateWithoutMojangAccountInputObjectSchema } from './UserCreateWithoutMojangAccountInput.schema';
import { UserUncheckedCreateWithoutMojangAccountInputObjectSchema } from './UserUncheckedCreateWithoutMojangAccountInput.schema';
import { UserCreateOrConnectWithoutMojangAccountInputObjectSchema } from './UserCreateOrConnectWithoutMojangAccountInput.schema';
import { UserUpsertWithoutMojangAccountInputObjectSchema } from './UserUpsertWithoutMojangAccountInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutMojangAccountInputObjectSchema } from './UserUpdateWithoutMojangAccountInput.schema';
import { UserUncheckedUpdateWithoutMojangAccountInputObjectSchema } from './UserUncheckedUpdateWithoutMojangAccountInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutMojangAccountNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutMojangAccountInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutMojangAccountInputObjectSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutMojangAccountInputObjectSchema).optional(),
		upsert: z.lazy(() => UserUpsertWithoutMojangAccountInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutMojangAccountInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutMojangAccountInputObjectSchema),
			])
			.optional(),
	})
	.strict();

export const UserUpdateOneRequiredWithoutMojangAccountNestedInputObjectSchema = Schema;
