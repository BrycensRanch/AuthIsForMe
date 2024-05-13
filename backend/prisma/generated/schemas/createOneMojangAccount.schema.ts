import { z } from 'zod';
import { MojangAccountCreateInputObjectSchema } from './objects/MojangAccountCreateInput.schema';
import { MojangAccountUncheckedCreateInputObjectSchema } from './objects/MojangAccountUncheckedCreateInput.schema';

export const MojangAccountCreateOneSchema = z.object({
	data: z.union([MojangAccountCreateInputObjectSchema, MojangAccountUncheckedCreateInputObjectSchema]),
});
