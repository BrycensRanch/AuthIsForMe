/* eslint-disable no-void */
/* eslint-disable no-underscore-dangle */

/* eslint-disable no-console */
import 'reflect-metadata';
import type { AutoloadPluginOptions } from '@fastify/autoload';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
// import inputValidation from 'openapi-validator-middleware';
import fastifyFormidable from '@damirn/fastify-formidable';
import { existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { dotenvLoad as loadMonoRepoEnvironment } from 'dotenv-mono';

import { fileURLToPath } from 'node:url';
import printRoutes from 'fastify-print-routes';
import fastifyResponseTime from 'fastify-request-timing';
import fastifyAllow from 'fastify-allow';
import fastifyUserAgent from 'fastify-user-agent';
import userAgent from 'useragent';
import fastifyCookie from '@fastify/cookie';
// import fastifyIP from 'fastify-ip';
import fastify204 from 'fastify-204';
import fastifyRouteStats from '@fastify/routes-stats';
import { fastifyAnalytics } from 'node-api-analytics';
import fastifyXML from 'fastify-xml-body-parser';
import fastifyJSON5 from 'fastify-json5';
import fastifyQS from 'fastify-qs';
import fastifyAcceptsSerializer from '@fastify/accepts-serializer';
import YAML from 'yaml';
// import { XMLBuilder } from 'fast-xml-parser';
import serverVersion from 'fastify-server-version';
import fastifyZodValidate from 'fastify-zod-validate';
import fjwt from '@fastify/jwt';
import fastifyETag from '@fastify/etag';
import { expand, DotenvExpandOptions } from 'dotenv-expand';
import fastifyViews from '@fastify/view';
import { Eta } from 'eta';

const eta = new Eta();
const defaults = await import(`dotenv-defaults`);

// Initializing the default environment variables
expand(
	defaults.config({
		path: './.env',
		encoding: 'utf8',
		defaults: './.env.example', // This is new
	}),
);

expand(
	loadMonoRepoEnvironment({
		path: join(dirname(fileURLToPath(import.meta.url)), '../.env'),
		encoding: 'utf8',
	}) as DotenvExpandOptions,
);

export type AppOptions = {
	// // Place your custom options for app below here.
	// https: {
	//   key: string;
	//   cert: string;
	// };
	// https: boolean;
	// logger: {};
} & Partial<AutoloadPluginOptions>;
// Application SSL, for Nginx to use to ensure that this Fastify instance is trusted.
// This SSL shouldn't effect clients though. That's NGINX's job. It'll use Cloudflare SSL instead.
const SSLFolder = './ssl';
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
	// https: true,
	// https: {
	//   key: path.join(SSLFolder, 'key.pem'),
	//   cert: path.join(SSLFolder, 'certificate.pem'),
	// },
};
if (!existsSync(SSLFolder) && process.env.NODE_ENV === 'production') mkdirSync(SSLFolder, { recursive: true });

const fastify: FastifyPluginAsync<AppOptions> = async (app): Promise<void> => {
	// Let's not run this while testing/prod... It's done repeatedly and it's very very annoying.
	if (process.env.NODE_APP_INSTANCE === '0' || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== 'test'))
		await app.register(printRoutes);

	// Under no circumstances should these be moved, it's legit the entire application
	// This loads all plugins defined in plugins
	// those should be support plugins that are reused
	// through out your application
	void (await app.register(import('./plugins/sentry.mjs')));
	void (await app.register(import('./plugins/swagger.mjs')));
	void (await app.register(import('./plugins/formbody.mjs')));
	void (await app.register(import('./plugins/errorHandler.mjs')));
	void (await app.register(import('./plugins/exit.mjs')));

	// It's perfectly fine to add one liner type of Fastify Plugins here.
	// If it's longer or more important, it should be in it's own file.
	await app.register(helmet, {
		contentSecurityPolicy: false,
	});
	// Cannot read properties of undefined (reading 'Symbol(ServerTiming)')
	await app.register(fastifyResponseTime);
	// [ERROR] prue FastifyError: fastify-plugin: fastify-impressions - expected '3.x' fastify version, '4.13.0' is installed
	// await app.register(fastifyImpressions, {
	//   blacklist: [], // specify URL's that are not to be tracked
	//   trackSuccessOnly: false // track only success responses
	// })
	await app.register(fastifyUserAgent);
	await app.register(fastifyAllow);
	// await app.register(fastifyIP);
	await app.register(fastifyXML);
	await app.register(fastifyQS);
	await app.register(fastifyETag);
	await app.register(fastifyViews, {
		engine: { eta },
		templates: join(dirname(fileURLToPath(import.meta.url)), './views'),
	});
	await app.register(fastifyFormidable, {
		removeFilesFromBody: true,
		addHooks: true,
	});
	await app.register(fastifyJSON5);
	await app.register(serverVersion());
	await app.register(fjwt, {
		secret: 'supersecret',
	});

	app.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
		try {
			await request.jwtVerify();
		} catch (error) {
			reply.send(error);
		}
	});
	await app.register(fastify204, {
		onUndefined: true,
		onNull: true,
		onEmptyArray: true,
	});
	// const builder = new XMLBuilder({
	// 	ignoreAttributes: true,
	// });
	// register the plugin
	await app.register(fastifyZodValidate, {
		// optional custom validation error handler
		handleValidatorError: error => {
			return { error, statusCode: 422, message: 'Unprocessable Entity - Zod Errors or something, man...' };
		},
	});

	// register the router
	await app.register(fastifyAcceptsSerializer, {
		serializers: [
			{
				// Needs to match application/x-yaml too
				regex: /^(application\/(x-)?yaml|text\/yaml)$/,
				serializer: body => YAML.stringify(body),
			},
			// {
			// 	regex: /^(application\/xml|text\/xml)$/,
			// 	serializer: body => builder.build(body),
			// },
			{
				// application/x-www-form-urlencoded
				regex: /^(application\/x-www-form-urlencoded)$/,
				serializer: body => {
					const form = new URLSearchParams();
					for (const [key, value] of Object.entries(body)) {
						form.append(key, value as string);
					}
					return form.toString();
				},
			},
		],
		default: 'application/json', // MIME type used if Accept header don't match anything
	});

	await app.register(fastifyRouteStats, {
		printInterval: 30_000, // milliseconds
		decoratorName: 'performanceMarked', // decorator is set to true if a performace.mark was called for the request
	});
	if (process.env.FASTIFY_ANALYTICS_API_KEY)
		app.addHook('onRequest', fastifyAnalytics(process.env.FASTIFY_ANALYTICS_API_KEY));
	app.addHook('onRequest', async request => {
		// Some code
		app.log.info(`Request from ${request.ip?.trim() || 'localhost'} from user agent ${request.userAgent.toString()}`);
	});
	app.get('/helloz', async () => {
		return 'Hello World!';
	});
	app.get('/exit', async (_request, reply) => {
		app.log.info('Recieved request to exit. EXITING 😭😭😭');
		reply.send({
			message: 'Exiting',
		});
		throw new Error('Exiting');
	});

	await app.register(cors, {
		origin: [process.env.FRONTEND_SERVER || 'http://localhost:3000'],
		methods: ['GET', 'PUT', 'POST', 'DELETE'],
		credentials: true,
	});

	// await app.register(inputValidation, {
	// try {
	// 	await new PrismaClient().$connect();
	// } catch (error) {
	// 	if (process.env.NODE_ENV !== "production") console.error(error);

	// 	throw error;
	// }
	await app.register(fastifyCookie);
	/*
Since fastify-print-routes uses an onRoute hook, you have to either:

* use `await register...`
* wrap you routes definitions in a plugin

See: https://www.fastify.io/docs/latest/Guides/Migration-Guide-V4/#synchronous-route-definitions
*/
};
// Are we running under PM2 or similar?
if (process.send) {
	process.send('ready');
}
export default fastify;
export { fastify, options };
declare module 'fastify' {
	export interface FastifyRequest {
		userAgent: userAgent.Agent;
	}
}
