import Fastify from 'fastify';
import {expect, jest, test} from '@jest/globals';


// eslint-disable-next-line import/extensions
import ErrorHandler from '../../../src/plugins/errorHandler';

test('error handler works standalone', async () => {
  const fastify = Fastify();

  await fastify.register(ErrorHandler);
  await fastify.ready();
  expect('ok').toBe('ok')
});
