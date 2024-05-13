// This file contains code that we reuse between our tests.
import { start } from '../src/start';

import fp from 'fastify-plugin';
import { afterAll, beforeAll } from 'vitest';
import App from '../src/app';

let initializedApp;

const config = {};
beforeAll(async () => {
  console.log('beforeAll');
  initializedApp = await start();
});

afterAll(() => initializedApp.close().catch(() => {}));
// Automatically build and tear down our instance
const build = async() => {
 return initializedApp;
};

export { build, config };
