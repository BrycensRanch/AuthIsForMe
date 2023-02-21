// This file contains code that we reuse between our tests.
import * as path from 'path';
import Fastify from "fastify";


import fp from "fastify-plugin";
import App from '../src/app'
import {afterAll, beforeAll, expect, jest, test} from '@jest/globals';




const config = {}

// Automatically build and tear down our instance
const build = () => {
  const app = Fastify();
  void app.register(fp(App));


  beforeAll(async () => {
    await app.ready();
  });

  afterAll(() => app.close());

  return app;
};

export { build, config };
