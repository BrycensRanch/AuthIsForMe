import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service.js';

describe('PrismaService', () => {
	let service: PrismaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PrismaService],
		}).compile();

		service = module.get<PrismaService>(PrismaService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
	it('should be able to query users', function () {
		return service.user.findMany().then(users => {
			expect(users).toBeDefined();
			console.log(users);
		});
	});
	it('should destroy the connection', async function () {
		await service.onModuleDestroy();
		// Ensure connection is closed via making a query that should fail
		return service.user.findMany().catch(error => {
			expect(error).toBeDefined();
			console.log(error);
		});
	});
  it('should throw an error when initialized twice', async function () {
    await service.onModuleInit();
    await service.onModuleInit().catch(error => {
      expect(error).toBeDefined();
      console.log(error);
    });
  });
});
