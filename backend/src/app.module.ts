import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RootController } from './modules/root.controller.js';
import { PrismaModule } from './modules/prisma/prisma.module.js';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		PrismaModule,
	],
	controllers: [RootController],
})
export class AppModule {}
