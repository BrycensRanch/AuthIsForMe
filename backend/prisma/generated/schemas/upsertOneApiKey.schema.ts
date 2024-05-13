import { z } from 'zod';
import { ApiKeyWhereUniqueInputObjectSchema } from './objects/ApiKeyWhereUniqueInput.schema';
import { ApiKeyCreateInputObjectSchema } from './objects/ApiKeyCreateInput.schema';
import { ApiKeyUncheckedCreateInputObjectSchema } from './objects/ApiKeyUncheckedCreateInput.schema';
import { ApiKeyUpdateInputObjectSchema } from './objects/ApiKeyUpdateInput.schema';
import { ApiKeyUncheckedUpdateInputObjectSchema } from './objects/ApiKeyUncheckedUpdateInput.schema';

export const ApiKeyUpsertSchema = z.object({
	where: ApiKeyWhereUniqueInputObjectSchema,
	create: z.union([ApiKeyCreateInputObjectSchema, ApiKeyUncheckedCreateInputObjectSchema]),
	update: z.union([ApiKeyUpdateInputObjectSchema, ApiKeyUncheckedUpdateInputObjectSchema]),
});
