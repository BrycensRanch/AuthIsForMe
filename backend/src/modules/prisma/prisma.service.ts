import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { createPrismaRedisCache } from 'prisma-redis-middleware';
import Redis from 'ioredis';
import RedisUrlParser from 'redis-url-plus';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
	private redis = new Redis(RedisUrlParser(process.env.REDIS_URL)); // Uses default options for Redis connection

	async onModuleInit() {
		await this.$connect();
		console.log('Prisma connected');
		const cacheMiddleware: Prisma.Middleware = createPrismaRedisCache({
			storage: { type: 'redis', options: { client: this.redis, invalidation: { referencesTTL: 300 } } },
			cacheTime: 300,
			excludeMethods: ['count', 'groupBy'],
			onHit: key => {
				console.log('hit', key);
			},
			onMiss: key => {
				console.log('miss', key);
			},
			onError: key => {
				console.log('error', key);
			},
		});

		this.$use(cacheMiddleware);
	}

	async onModuleDestroy() {
		await this.$disconnect();
		await this.redis.quit();
		console.log('Prisma & Redis disconnected');
	}
}
