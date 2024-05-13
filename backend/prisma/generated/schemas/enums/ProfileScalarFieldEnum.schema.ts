import { z } from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum([
	'profileId',
	'createdAt',
	'banned',
	'profilePrivate',
	'profileViews',
	'lastSeen',
	'avatar',
	'username',
	'role',
	'biography',
]);
