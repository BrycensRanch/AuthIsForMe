import { Message, MessageInput } from "../../src/entity/message.js";
import { build } from "../helper.js";

const app = build();

describe("Messages CRUD test", () => {
	let id: number;
	const input: MessageInput = {
		author: "Me",
		text: "Text",
	};

	beforeEach(async () => {
		const result = await app.inject({
			url: "/messages",
			method: "POST",
			payload: input,
		});

		id = result.json<Message>().id;
	});

	afterEach(async () => {
		await app.inject({
			url: `/messages/${id}`,
			method: "DELETE",
		});
	});

	it("should be able to find message by id", async () => {
		const result = await app.inject(`/messages/${id}`),
			body = result.json<Message>();

		expect(body.author).toEqual(input.author);
		expect(body.text).toEqual(input.text);
	});
});
