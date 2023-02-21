import { FastifyReply, FastifyRequest, FastifySchema } from 'fastify';
import { Controller, DELETE, GET, Hook, POST } from 'fastify-decorators';
// import { Message, MessageInput } from '@/src/entity/message';
// import { MessageFacade } from '@/src/facades/message.facade.js';
// import { messageInputSchema, messageSchema } from '@/src/schemas/message.schema.js';

@Controller('/messages')
export class MessageController {
  // constructor(private messageFacade: MessageFacade) {}
  // example hook 
  @Hook('onSend')
  async onSend(request, reply) {
    reply.removeHeader('X-Powered-By');
  }
  @GET({
    url: '/',
    options: {
      schema: <FastifySchema>{
        tags: ['messageController'],
        response: { 200: { type: 'array', items: [] } },
      },
    },
  })
  getAll() {
    return ['hello', 'world'];
  }

  // @POST({
  //   url: '/',
  //   options: {
  //     schema: <FastifySchema>{
  //       tags: ['messageController'],
  //       body: messageInputSchema,
  //       response: { 200: messageSchema },
  //     },
  //   },
  // })
  // async createOrUpdate(request: FastifyRequest<{ Body: MessageInput }>): Promise<Message> {
  //   return await this.messageFacade.storeMessage(request.body);
  // }

  // @GET({
  //   url: '/:id',
  //   options: {
  //     schema: <FastifySchema>{
  //       tags: ['messageController'],
  //       params: { type: 'object', properties: { id: { type: 'number' } } },
  //       response: { 200: messageSchema },
  //     },
  //   },
  // })
  // async getById(request: FastifyRequest<{ Params: { id: number } }>): Promise<Message> {
  //   const message = await this.messageFacade.getMessageBy(request.params.id);

  //   if (!message) throw { statusCode: 404, message: 'Entity not found' };
  //   return message;
  // }

  // @DELETE({
  //   url: '/:id',
  //   options: {
  //     schema: <FastifySchema>{
  //       tags: ['messageController'],
  //       params: { type: 'object', properties: { id: { type: 'number' } } },
  //     },
  //   },
  // })
  // async deleteById(request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply): Promise<void> {
  //   await this.messageFacade.deleteBy(request.params.id);

  //   reply.status(200).send();
  // }
}