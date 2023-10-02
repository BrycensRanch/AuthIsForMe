import fastifySwaggerUi from '@fastify/swagger-ui';
import type { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp(async (app: FastifyInstance) => {
	await app.register(fastifySwagger, {
		openapi: {
			info: { title: 'Test openapi', description: 'testing the fastify swagger api', version: '0.1.0' },
			servers: [{ url: 'http://localhost:8000' }],
			components: {
				securitySchemes: {
					apiKey: {
						type: 'apiKey',
						name: 'apiKey',
						in: 'header',
					},
				},
			},
			security: [{ apiKey: [] }],
		},
	});
	await app.register(fastifySwaggerUi);
	console.log('Registered Swagger');
});
