import { z } from 'zod';
import { MojangAccountWhereInputObjectSchema } from './MojangAccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MojangAccountRelationFilter> = z
	.object({
		is: z
			.lazy(() => MojangAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
		isNot: z
			.lazy(() => MojangAccountWhereInputObjectSchema)
			.optional()
			.nullable(),
	})
	.strict();

export const MojangAccountRelationFilterObjectSchema = Schema;
