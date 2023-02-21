import { FastifyReply, FastifyRequest, FastifySchema } from 'fastify';
import { Controller, DELETE, GET, Hook, POST } from 'fastify-decorators';
// import { MessageFacade } from '@/src/facades/message.facade.js';
// import { messageInputSchema, messageSchema } from '@/src/schemas/message.schema.js';

@Controller()
export class AuthController {
  // @Hook('onSend')
  // async onSend(request, reply) {
  //   reply.removeHeader('X-Powered-By');
  // }

  @GET({
    url: '/v1/auth',
    options: {
      schema: {
        tags: ['authController'],
        response: { 200: { type: 'array', items: [] } },
      } as FastifySchema,
    },
  })
  getAll() {
    return ['hello', 'world'];
  }
  @GET('/z')
  async getHandler(request: FastifyRequest, reply: FastifyReply) {
    return 'Hello world!';
  }

  @POST('/post')
  async postHandler(request: FastifyRequest, reply: FastifyReply) {
    // Doing some activities here
    return ['hello', 'worldd'];
  }

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