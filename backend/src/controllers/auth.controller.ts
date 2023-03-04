import { PrismaClient } from '@prisma/client';
import type { FastifyReply, FastifyRequest, FastifySchema } from 'fastify';
import { Controller, DELETE, GET, Hook, POST } from 'fastify-decorators';
import Redis from 'ioredis';
import DatabaseService from '../services/database.service.js';
import RedisService from '../services/redis.service.js';
// import { MessageFacade } from '@/src/facades/message.facade.js';
// import { messageInputSchema, messageSchema } from '@/src/schemas/message.schema.js';

@Controller()
export default class AuthController {
  // @Hook('onSend')
  // async onSend(request, reply) {
  //   reply.removeHeader('X-Powered-By');
  // }

  @GET('/info')
  getAll(request: FastifyRequest, reply: FastifyReply) {
    const db = new DatabaseService(new RedisService(new Redis()), new PrismaClient())
    db.init()
    request.session.set('name', 'john')
    request.session.set('vsl', {name: 'johnny'})
      // .options takes any parameter that you can pass to setCookie
  // request.session.options({ maxAge: 1000 * 60 * 60 })
    reply.send({ message: 'hello world'})
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