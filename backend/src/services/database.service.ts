import { Destructor, Initializer, Service } from "@fastify-decorators/simple-di";
import { PrismaClient } from "@prisma/client";
import { createPrismaRedisCache } from "prisma-redis-middleware";
import RedisService from "./redis.service.js";

// Otherwise known as @Injectable()
@Service()
export default class DatabaseService {
	constructor(private redisService: RedisService, private prisma: PrismaClient) {}

	public get cache() {
		return this.redisService.cache;
	}

	public get db() {
		return this.prisma;
	}

	@Initializer()
	async init(): Promise<void> {
		this.prisma = new PrismaClient();

		await this.prisma.$connect();

		// const cacheMiddleware = createPrismaRedisCache({
		//   models: [
		//     { model: "User", excludeMethods: ["findMany"] },
		//     { model: "Post", cacheTime: 180, cacheKey: "article" },
		//   ],
		//   storage: { type: "redis", options: { client: this.cache, invalidation: { referencesTTL: 300 }, log: console } },
		//   cacheTime: 300,
		//   excludeModels: ["Product", "Cart"],
		//   excludeMethods: ["count", "groupBy"],
		//   onHit: (key) => {
		//     console.log("hit", key);
		//   },
		//   onMiss: (key) => {
		//     console.log("miss", key);
		//   },
		//   onError: (key) => {
		//     console.log("error", key);
		//   },
		// });
		// this.prisma.$use(cacheMiddleware);
	}

	@Destructor()
	async destroy(): Promise<void> {
		await this.prisma.$disconnect();
	}
	// remove(id: number) {
	//   return this.prisma.article.delete({ where: { id } });
	// }
}
