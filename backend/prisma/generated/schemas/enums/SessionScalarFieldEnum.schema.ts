import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'sid', 'expires', 'data', 'createdAt', 'updatedAt']);
