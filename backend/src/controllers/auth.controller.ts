// import { PrismaClient } from "@prisma/client";
import type { FastifyPluginCallback, FastifyReply, FastifyRequest } from "fastify";
import { Controller, POST } from "fastify-decorators";
import { RateLimiterMemory } from "rate-limiter-flexible";

// import Redis from "ioredis";
// import DatabaseService from "../services/database.service.js";
// import RedisService from "../services/redis.service.js";
// import { MessageFacade } from '@/src/facades/message.facade.js';
// import { messageInputSchema, messageSchema } from '@/src/schemas/message.schema.js';
import { z } from 'zod'
export const UserBody = z.object({
  username: z.string().min(5).max(10),
  balance: z.number().min(1000),
}).strict()
export type UserBody = z.infer<typeof UserBody>

export const UserPathParams = z.object({
  userID: z.string().min(4).max(4),
}).strict()
export type UserPathParams = z.infer<typeof UserPathParams>
export const zodValidateRouter: FastifyPluginCallback = (fastify, options, next) => {
  fastify.withTypeProvider().route({
    method: 'POST',
    url: '/user/:userID',
    schema: {
      body: UserBody,
      params: UserPathParams,
    },
    handler: async (request, reply) => {
      // no casting or @ts-ignore required
      const { body, params, query } = request
      const { userID } = params
			const opts = {
				points: 2, // 2 points
			}
			const rateLimiter = new RateLimiterMemory(opts);

			rateLimiter.consume(request.ip.trim() || "localhost", 1) // consume 2 points
					.then(async(rateLimiterRes) => {
						const headers = {
							"Retry-After": rateLimiterRes.msBeforeNext / 1000,
							"X-RateLimit-Limit": opts.points,
							"X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
							"X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
						}
						for (const [key, value] of Object.entries(headers)) {
							reply.header(key, value)
						}
						 reply.statusCode = 200
						 await reply.send({
							data: {
								message: `OK user with ID ${userID}`,
								body,
								query, 
							},
						})
					})
					.catch(async(rateLimiterRes) => {
						const headers = {
							"Retry-After": rateLimiterRes.msBeforeNext / 1000,
							"X-RateLimit-Limit": opts.points,
							"X-RateLimit-Remaining": rateLimiterRes.remainingPoints,
							"X-RateLimit-Reset": new Date(Date.now() + rateLimiterRes.msBeforeNext)
						}
						for (const [key, value] of Object.entries(headers)) {
							reply.header(key, value)
						}
						      // Not enough points to consume
									reply.statusCode = 429
            await reply.send({
							"fuck":"off",
							"message": `Too Many Requests`,
							"retryAfter": rateLimiterRes.msBeforeNext / 1000,
							"remainingPoints": rateLimiterRes.remainingPoints,
							"consumedPoints": rateLimiterRes.consumedPoints,
						})
					});
    }
  })

  next()
}
@Controller()
export default class AuthController {
	// @Hook('onSend')
	// async onSend(request, reply) {
	//   reply.removeHeader('X-Powered-By');
	// }

	@POST("/user/:userID")
	getAll(request: FastifyRequest, reply: FastifyReply) {
		// .options takes any parameter that you can pass to setCookie
		// request.session.options({ maxAge: 1000 * 60 * 60 })
		console.log(request.query)
		console.log(request.body)
		reply.send({ message: "hello world" });
	}
	// @GET('/z')
	// async getHandler() {
	//   return { message: 'hello world' };
	// }

	// @POST('/post')
	// async postHandler() {
	//   // Doing some activities here
	//   reply.send({
	//     status: 'ok',
	//   });
	//   }

	//   @POST({
	//     url: '/',
	//     options: {
	//       schema: <FastifySchema>{
	//         tags: ['authController'],
	//         body: messageInputSchema,
	//         response: { 200: messageSchema },
	//       },
	//     },
	//   })
	//   async createOrUpdate(request: FastifyRequest<{ Body: MessageInput }>): Promise<Message> {
	//     return await this.messageFacade.storeMessage(request.body);
	//   }

	//   @GET({
	//     url: '/:id',
	//     options: {
	//       schema: <FastifySchema>{
	//         tags: ['authController'],
	//         params: { type: 'object', properties: { id: { type: 'number' } } },
	//         response: { 200: messageSchema },
	//       },
	//     },
	//   })
	//   async getById(request: FastifyRequest<{ Params: { id: number } }>): Promise<Message> {
	//     const message = await this.messageFacade.getMessageBy(request.params.id);

	//     if (!message) throw { statusCode: 404, message: 'Entity not found' };
	//     return message;
	//   }

	//   @DELETE({
	//     url: '/:id',
	//     options: {
	//       schema: <FastifySchema>{
	//         tags: ['authController'],
	//         params: { type: 'object', properties: { id: { type: 'number' } } },
	//       },
	//     },
	//   })
	//   async deleteById(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply): Promise<void> {
	//     await this.messageFacade.deleteBy(request.params.id);

	//     reply.status(200).send();
	//   }
}
