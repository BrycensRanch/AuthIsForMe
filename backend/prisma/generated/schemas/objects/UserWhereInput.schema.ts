import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ProfileRelationFilterObjectSchema } from './ProfileRelationFilter.schema';
import { ProfileWhereInputObjectSchema } from './ProfileWhereInput.schema';
import { ApiKeyListRelationFilterObjectSchema } from './ApiKeyListRelationFilter.schema';
import { MojangAccountRelationFilterObjectSchema } from './MojangAccountRelationFilter.schema';
import { MojangAccountWhereInputObjectSchema } from './MojangAccountWhereInput.schema';
import { DiscordAccountRelationFilterObjectSchema } from './DiscordAccountRelationFilter.schema';
import { DiscordAccountWhereInputObjectSchema } from './DiscordAccountWhereInput.schema';
import { TwitchAccountRelationFilterObjectSchema } from './TwitchAccountRelationFilter.schema';
import { TwitchAccountWhereInputObjectSchema } from './TwitchAccountWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
			.optional(),
		OR: z
			.lazy(() => UserWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()])
			.optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
		profileId: z
			.union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
			.optional()
			.nullable(),
		profile: z
			.union([z.lazy(() => ProfileRelationFilterObjectSchema), z.lazy(() => ProfileWhereInputObjectSchema)])
			.optional()
			.nullable(),
		apiKeys: z.lazy(() => ApiKeyListRelationFilterObjectSchema).optional(),
		mojangAccount: z
			.union([z.lazy(() => MojangAccountRelationFilterObjectSchema), z.lazy(() => MojangAccountWhereInputObjectSchema)])
			.optional()
			.nullable(),
		DiscordAccount: z
			.union([
				z.lazy(() => DiscordAccountRelationFilterObjectSchema),
				z.lazy(() => DiscordAccountWhereInputObjectSchema),
			])
			.optional()
			.nullable(),
		TwitchAccount: z
			.union([z.lazy(() => TwitchAccountRelationFilterObjectSchema), z.lazy(() => TwitchAccountWhereInputObjectSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const UserWhereInputObjectSchema = Schema;
