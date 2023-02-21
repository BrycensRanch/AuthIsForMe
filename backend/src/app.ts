/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import 'reflect-metadata';
import type { AutoloadPluginOptions } from '@fastify/autoload';
import AutoLoad from '@fastify/autoload';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import type { FastifyPluginAsync } from 'fastify';
// import inputValidation from 'openapi-validator-middleware';
import fs from 'fs';
// Trust me bro, I have no idea what this code is doing... However, it allows the import of ESM modules so I'm not complaining.
// @ts-ignore
// eslint-disable-next-line import/extensions
import inclusion from 'inclusion';
// eslint-disable-next-line import/no-named-default
import { join, dirname } from 'node:path';
import { bootstrap } from 'fastify-decorators';

import fastifySwaggerUi from '@fastify/swagger-ui';
import { fileURLToPath } from 'node:url';
import {load as loadMonoRepoEnv} from 'dotenv-mono'; 
import {config as loadEnvDefaultsAndRegularEnv} from 'dotenv-defaults';
import printRoutes from 'fastify-print-routes';
import fastifyResponseTime from 'fastify-request-timing';
import fastifyImpressions from 'fastify-impressions';
import fastifyGetHead from 'fastify-get-head';
import fastifyAllow from 'fastify-allow'
import fastifyIP from 'fastify-ip';
import fastifyUserAgent from 'fastify-user-agent';
import userAgent from 'useragent'
import { Session } from '@fastify/secure-session';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

loadMonoRepoEnv()

loadEnvDefaultsAndRegularEnv()

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
const SSLFolder = './ssl';
// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
  // https: true,
  // https: {
  //   key: path.join(SSLFolder, 'key.pem'),
  //   cert: path.join(SSLFolder, 'certificate.pem'),
  // },
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
    },
  },
};
if (!fs.existsSync(SSLFolder) && process.env.NODE_ENV === 'production') {
  fs.mkdirSync(SSLFolder, { recursive: true });
}

const fastify: FastifyPluginAsync<AppOptions> = async (
  app,
  _opts
): Promise<void> => {
  // Let's not run this while testing/prod... It's done repeatedly and it's very very annoying.
  if (
    process.env.NODE_APP_INSTANCE === '0' ||
    (!process.env.NODE_APP_INSTANCE && process.env.NODE_ENV !== 'test')
  ) {
    await app.register(printRoutes);
  }
  // It's perfectly fine to add one liner type of Fastify Plugins here.
  // If it's longer or more important, it should be in it's own file.
  await app.register(helmet, {
    contentSecurityPolicy: false,
  });
  //Cannot read properties of undefined (reading 'Symbol(ServerTiming)')
  await app.register(fastifyResponseTime);
  // [ERROR] prue FastifyError: fastify-plugin: fastify-impressions - expected '3.x' fastify version, '4.13.0' is installed
  // await app.register(fastifyImpressions, {
  //   blacklist: [], // specify URL's that are not to be tracked
  //   trackSuccessOnly: false // track only success responses
  // })
  // await app.register(fastifyGetHead)
  await app.register(fastifyUserAgent)
  await app.register(fastifyAllow)
  await app.register(fastifyIP)
  // app.addHook('onRequest', async (request, reply) => {
  //   // Some code
  //   app.log.info(request.ip, request.userAgent)
  // })
  // app.get('/helloz', async () => {
  //   return "Hello World!"
  // })
  // app.get('/exit', async () => process.exit(0))

  await app.register(cors, {
    origin: [
      process.env.FRONTEND_SERVER || 'http://localhost:3000',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
  });

  // await app.register(inputValidation, {
  // Under no circumstances should these be moved, it's legit the entire application
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void app.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
  });
  await app.register(bootstrap, {
    directory: join(__dirname, 'controllers'),
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
  process.send('ready');
}
export default fastify;
export { fastify, options };
declare module 'fastify' {
  export interface FastifyRequest {
      userAgent: userAgent.Agent
  }
}