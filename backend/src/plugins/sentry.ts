import type { FastifySentryOptions } from '@immobiliarelabs/fastify-sentry';
import sentry from '@immobiliarelabs/fastify-sentry';
import type { FastifyTypeProviderDefault, RawServerDefault } from 'fastify';
import fp from 'fastify-plugin';
import { ProfilingIntegration } from '@sentry/profiling-node';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

/**
 * This plugin enables the fastify sentry plugin to track performance & error messages
 *
 * @see https://github.com/immobiliare/fastify-sentry
 */
export default fp<FastifySentryOptions, RawServerDefault, FastifyTypeProviderDefault>(async fastify => {
	if (SENTRY_DSN) {
    // @ts-ignore
		fastify.register(sentry, {
			dsn: SENTRY_DSN,
			environment: process.env.NODE_ENV,
			tracesSampleRate: 1,
			setErrorHandler: true,
      integrations: [
        new ProfilingIntegration()
      ]
		});
	} else fastify.log.warn('did not load sentry because no sentry_dsn environment variable was provided');
});
