/* eslint-disable no-underscore-dangle */

/* eslint-disable no-console */
import "reflect-metadata";
import type { AutoloadPluginOptions } from "@fastify/autoload";
import AutoLoad from "@fastify/autoload";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import type { FastifyPluginAsync } from "fastify";
// import inputValidation from 'openapi-validator-middleware';
import fs from "node:fs";
import { join, dirname } from "node:path";
import { bootstrap } from "fastify-decorators";

import { fileURLToPath } from "node:url";
import { load as loadMonoRepoEnvironment } from "dotenv-mono";
import { config as loadEnvironmentDefaultsAndRegularEnvironment } from "dotenv-defaults";
import { DotenvExpandOptions, expand } from "dotenv-expand";
import printRoutes from "fastify-print-routes";
import fastifyResponseTime from "fastify-request-timing";
import fastifyAllow from "fastify-allow";
import fastifyUserAgent from "fastify-user-agent";
import userAgent from "useragent";
import fastifyCookie from "@fastify/cookie";
import fastifyIP from "fastify-ip";

import { PrismaClient } from "@prisma/client";

const __dirname = dirname(fileURLToPath(import.meta.url));

expand(
	loadMonoRepoEnvironment({
		path: join(__dirname, "../.env"),
		encoding: "utf8",
	}) as DotenvExpandOptions
);

expand(
	loadEnvironmentDefaultsAndRegularEnvironment({
		path: "./.env",
		encoding: "utf8",
		defaults: "./.env.example", // This is new
	})
);

export type AppOptions = {
	// // Place your custom options for app below here.
	// https: {
	//   key: string;
	//   cert: string;
	// };
	// https: boolean;
	logger: {};
} & Partial<AutoloadPluginOptions>;
// Application SSL, for Nginx to use to ensure that this Fastify instance is trusted.
// This SSL shouldn't effect clients though. That's NGINX's job. It'll use Cloudflare SSL instead.
const SSLFolder = "./ssl",
	// Pass --options via CLI arguments in command to enable these options.
	options: AppOptions = {
		// https: true,
		// https: {
		//   key: path.join(SSLFolder, 'key.pem'),
		//   cert: path.join(SSLFolder, 'certificate.pem'),
		// },
		logger: {
			level: "info",
			transport: {
				target: "pino-pretty",
			},
		},
	};
if (!fs.existsSync(SSLFolder) && process.env.NODE_ENV === "production") fs.mkdirSync(SSLFolder, { recursive: true });

const fastify: FastifyPluginAsync<AppOptions> = async (app, _options): Promise<void> => {
	// Let's not run this while testing/prod... It's done repeatedly and it's very very annoying.
	if (process.env.NODE_APP_INSTANCE === "0" || (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== "test"))
		await app.register(printRoutes);

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
	// await app.register(fastifyGetHead)
	await app.register(fastifyUserAgent);
	await app.register(fastifyAllow);
	await app.register(fastifyIP);

	app.addHook("onRequest", async (request, _reply) => {
		// Some code
		app.log.info(`Request from ${request.ip.trim() || "localhost"} from user agent ${request.userAgent.toString()}`);
	});
	app.get("/helloz", async () => {
		return "Hello World!";
	});
	app.get("/exit", async (_request, reply) => {
		app.log.info("Recieved request to exit. EXITING 😭😭😭");
		reply.send({
			message: "Exiting",
		});
		throw new Error("Exiting");
	});

	await app.register(cors, {
		origin: [process.env.FRONTEND_SERVER || "http://localhost:3000"],
		methods: ["GET", "PUT", "POST", "DELETE"],
		credentials: true,
	});

	// await app.register(inputValidation, {
	// Under no circumstances should these be moved, it's legit the entire application
	// This loads all plugins defined in plugins
	// those should be support plugins that are reused
	// through your application
	void app.register(AutoLoad, {
		dir: join(__dirname, "plugins"),
	});
	try {
		await new PrismaClient().$connect();
	} catch (error) {
		if (process.env.NODE_ENV !== "production") console.error(error);

		throw error;
	}
	await app.register(fastifyCookie);
	await app.register(bootstrap, {
		directory: join(__dirname, "controllers"),
	});
	/*
Since fastify-print-routes uses an onRoute hook, you have to either:

* use `await register...`
* wrap you routes definitions in a plugin

See: https://www.fastify.io/docs/latest/Guides/Migration-Guide-V4/#synchronous-route-definitions
*/
};
// Are we running under PM2 or similar?
if (process.env.NODE_APP_INSTANCE) {
	// @ts-ignore
	process.send("ready");
}
export default fastify;
export { fastify, options };
declare module "fastify" {
	export interface FastifyRequest {
		userAgent: userAgent.Agent;
	}
}
