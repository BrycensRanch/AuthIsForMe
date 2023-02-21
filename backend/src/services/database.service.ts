import { Destructor, Initializer, Service } from '@fastify-decorators/simple-di';
import { Prisma, PrismaClient } from '@prisma/client';
import { createPrismaRedisCache } from "prisma-redis-middleware";
import RedisService from './redis.service.js'

// Otherwise known as @Injectable()
@Service()
export default class DatabaseService {
  constructor(private prisma: PrismaClient, private redisService: RedisService) { }


  public get cache() {
    return this.redisService;
  }
  public get db() {
    return this.prisma;
  }

  @Initializer()
  async init(): Promise<void> {
    console.log('Initializing DatabaseService');
    const cacheMiddleware: Prisma.Middleware = createPrismaRedisCache({
      models: [
        { model: "User", excludeMethods: ["findMany"] },
        { model: "Post", cacheTime: 180, cacheKey: "article" },
      ],
          // @ts-ignore
      storage: { type: "redis", options: { client: this.cache, invalidation: { referencesTTL: 300 }, log: console } },
      cacheTime: 300,
      excludeModels: ["Product", "Cart"],
      excludeMethods: ["count", "groupBy"],
      onHit: (key) => {
        console.log("hit", key);
      },
      onMiss: (key) => {
        console.log("miss", key);
      },
      onError: (key) => {
        console.log("error", key);
      },
    });
    this.prisma.$use(cacheMiddleware);

    await this.prisma.$connect();
  }

  @Destructor()
  async destroy(): Promise<void> {
    await this.prisma.$disconnect();
  }
  // remove(id: number) {
  //   return this.prisma.article.delete({ where: { id } });
  // }
}