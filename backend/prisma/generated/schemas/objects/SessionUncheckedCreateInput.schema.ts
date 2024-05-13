import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
	z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())]),
);

const Schema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z
	.object({
		id: z.bigint().optional(),
		sid: z.string(),
		expires: z.coerce.date(),
		data: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
		createdAt: z.coerce.date().optional(),
		updatedAt: z.coerce.date().optional(),
	})
	.strict();

export const SessionUncheckedCreateInputObjectSchema = Schema;
