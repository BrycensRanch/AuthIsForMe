import { z } from 'zod';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';
import { MojangAccountCreateInputObjectSchema } from './objects/MojangAccountCreateInput.schema';
import { MojangAccountUncheckedCreateInputObjectSchema } from './objects/MojangAccountUncheckedCreateInput.schema';
import { MojangAccountUpdateInputObjectSchema } from './objects/MojangAccountUpdateInput.schema';
import { MojangAccountUncheckedUpdateInputObjectSchema } from './objects/MojangAccountUncheckedUpdateInput.schema';

export const MojangAccountUpsertSchema = z.object({
	where: MojangAccountWhereUniqueInputObjectSchema,
	create: z.union([MojangAccountCreateInputObjectSchema, MojangAccountUncheckedCreateInputObjectSchema]),
	update: z.union([MojangAccountUpdateInputObjectSchema, MojangAccountUncheckedUpdateInputObjectSchema]),
});
