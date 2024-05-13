import { z } from 'zod';
import { MojangAccountUpdateInputObjectSchema } from './objects/MojangAccountUpdateInput.schema';
import { MojangAccountUncheckedUpdateInputObjectSchema } from './objects/MojangAccountUncheckedUpdateInput.schema';
import { MojangAccountWhereUniqueInputObjectSchema } from './objects/MojangAccountWhereUniqueInput.schema';

export const MojangAccountUpdateOneSchema = z.object({
	data: z.union([MojangAccountUpdateInputObjectSchema, MojangAccountUncheckedUpdateInputObjectSchema]),
	where: MojangAccountWhereUniqueInputObjectSchema,
});
