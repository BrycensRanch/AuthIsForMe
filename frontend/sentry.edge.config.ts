// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

import { env } from '@/env.mjs';

Sentry.init({
	dsn: env.NEXT_PUBLIC_SENTRY_DSN,

	// Adjust this value in production, or use tracesSampler for greater control
	tracesSampleRate: 1,
	profilesSampleRate: 1, // Profiling sample rate is relative to tracesSampleRate

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
	integrations: [
		// Add profiling integration to list of integrations
		nodeProfilingIntegration(),
	],
});
