import { z } from 'zod';

export const ApiKeyTypeSchema = z.enum(['FREE', 'HOBBY', 'BUSINESS']);
