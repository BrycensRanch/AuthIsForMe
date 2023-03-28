import { Destructor, Initializer, Service } from "@fastify-decorators/simple-di";
import { Prisma, PrismaClient } from "@prisma/client";
import { createPrismaRedisCache } from "prisma-redis-middleware";
import RedisService from "./redis.service.js";

// Otherwise known as @Injectable()
@Service()
export default class GeyserService {
	private prisma: PrismaClient;

	constructor(prisma = new PrismaClient()) {
		console.log("Constructing GeyserService");
		// You aint got the answers sway, you aint got the answers sway
		this.prisma = prisma;
	}

	@Initializer()
	async init(): Promise<void> {
		console.log("Initializing GeyserService");
		this.prisma.$on("beforeExit", async () => {
			console.log("HACK THE PLANET!!! ");
		});
	}

	@Destructor()
	async destroy(): Promise<void> {}
	// remove(id: number) {
	//   return this.prisma.article.delete({ where: { id } });
	// }
}
