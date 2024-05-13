import { z } from 'zod';

export const TwitchAccountScalarFieldEnumSchema = z.enum(['userId', 'accessTokenHash', 'refreshtokenHash']);
