import { Destructor, Initializer, Service } from "@fastify-decorators/simple-di";
import { Redis } from "ioredis";

// Otherwise known as @Injectable()
@Service()
export default class RedisService {
	constructor(private redis: Redis) {}

	public get cache() {
		return this.redis;
	}

	@Initializer()
	async init() {
		console.log("Initializing RedisService");
		await this.redis.connect();
	}

	@Destructor()
	async destroy() {
		this.redis.disconnect();
	}
	// remove(id: number) {
	//   return this.prisma.article.delete({ where: { id } });
	// }
}
