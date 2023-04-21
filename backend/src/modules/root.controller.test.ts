import { RootController } from './root.controller.js';
import { PrismaService } from './prisma/prisma.service.js';

describe('RootController', () => {
	let rootController: RootController;
	let prismaService: PrismaService;

	beforeEach(() => {
		prismaService = new PrismaService();
		rootController = new RootController(prismaService);
	});

	it('should be defined', () => {
		expect(rootController).toBeDefined();
	});
});
