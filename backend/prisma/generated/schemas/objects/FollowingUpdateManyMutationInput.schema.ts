import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpdateManyMutationInput> = z.object({}).strict();

export const FollowingUpdateManyMutationInputObjectSchema = Schema;
