import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp(async (fastify: FastifyInstance) => {
	if (SENTRY_DSN) {
		fastify.setErrorHandler(async (error, _request, reply) => {
			reply.status(500);
			fastify.Sentry.captureException(error);
			return reply.send(error);
		});
	}
});
