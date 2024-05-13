import { z } from 'zod';

export const ApiKeyScalarFieldEnumSchema = z.enum(['id', 'name', 'type', 'key', 'createdAt', 'validUntil', 'userId']);
