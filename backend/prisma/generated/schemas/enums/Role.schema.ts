import { z } from 'zod';

export const RoleSchema = z.enum(['USER', 'MODERATOR', 'ADMIN', 'OWNER']);
