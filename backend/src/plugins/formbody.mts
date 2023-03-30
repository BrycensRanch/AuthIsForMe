import type { FastifyInstance } from "fastify";
import fp from "fastify-plugin";
import fastifyFormBody from "@fastify/formbody";

/**
 *
 * @see https://github.com/fastify/fastify-formbody
 */
export default fp(async (app: FastifyInstance) => {
	await app.register(fastifyFormBody);
});
