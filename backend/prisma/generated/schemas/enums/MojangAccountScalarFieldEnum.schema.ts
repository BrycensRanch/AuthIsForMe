import { z } from 'zod';

export const MojangAccountScalarFieldEnumSchema = z.enum([
	'uuid',
	'username',
	'userId',
	'accessTokenHash',
	'refreshtokenHash',
]);
