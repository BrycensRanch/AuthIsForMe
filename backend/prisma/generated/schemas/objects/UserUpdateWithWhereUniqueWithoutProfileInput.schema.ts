import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutProfileInputObjectSchema } from './UserUpdateWithoutProfileInput.schema';
import { UserUncheckedUpdateWithoutProfileInputObjectSchema } from './UserUncheckedUpdateWithoutProfileInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutProfileInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => UserUpdateWithoutProfileInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutProfileInputObjectSchema),
		]),
	})
	.strict();

export const UserUpdateWithWhereUniqueWithoutProfileInputObjectSchema = Schema;
