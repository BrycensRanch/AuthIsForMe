import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FollowingUpdateWithoutUserInput> = z.object({}).strict();

export const FollowingUpdateWithoutUserInputObjectSchema = Schema;
