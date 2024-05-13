import { z } from 'zod';

export const DiscordAccountScalarFieldEnumSchema = z.enum(['userId', 'accessTokenHash', 'refreshtokenHash']);
