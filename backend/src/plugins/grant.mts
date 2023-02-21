import fastify, { FastifyInstance } from "fastify";
import grant from "fastify-grant";
import session from '@fastify/secure-session';
import cookie, { fastifyCookie } from '@fastify/cookie'
import fastifySession from "@mgcrea/fastify-session";
import fp from 'fastify-plugin';
import Redis from "ioredis";
import RedisStore from "@mgcrea/fastify-session-redis-store";
import oauthConfig from "@/oauthConfig.cjs";

const SESSION_TTL = 864e3; // 1 day in seconds

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/simov/fastify-grant
 */
export default fp(async (app: FastifyInstance) => {
  await app.register(fastifyCookie);
  await app.register(fastifySession, {
    store: new RedisStore({ client: new Redis(), ttl: SESSION_TTL }),
    secret: "a secret with minimum length of 32 characters",
    cookie: { maxAge: SESSION_TTL },
  });

// await app.register(cookie)
// await app.register(session, {
//   // the name of the session cookie, defaults to 'session'
//   // adapt this to point to the directory where secret-key is located
//   key: 'grant',
//   cookie: {
//     path: '/'
//     // options for setCookie, see https://github.com/fastify/fastify-cookie
//   }
// })
await app.register(grant(oauthConfig))

});