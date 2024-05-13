import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['email', 'userId', 'profileId']);
