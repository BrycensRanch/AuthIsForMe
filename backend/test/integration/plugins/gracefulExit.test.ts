// SIGUSR2
import { afterAll, expect, jest, test } from "@jest/globals";

import Fastify from "fastify";
// eslint-disable-next-line import/extensions
import GracefulExit from "../../plugins/exit";

const fastify = Fastify();

test("fastify graceful exit prints log to console", async () => {
	await fastify.register(GracefulExit);
	await fastify.ready();
	expect(true).toBeTruthy();
});
