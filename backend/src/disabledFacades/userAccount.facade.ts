import { Initializer, Service } from "@fastify-decorators/simple-di";
// import type { Repository } from 'typeorm';
// import { Message } from '@/src/entity/message';
// import { DataSourceProvider } from '../services/auth.provider';

@Service()
export default class UserFacade {
	// constructor(private dataSourceProvider: DataSourceProvider) {}

	@Initializer()
	async init(): Promise<void> {
		// because we added DataSourceProvider as a dependency, we are sure it was properly initialized if it reaches
		// this point
		// this.repository = this.dataSourceProvider.dataSource.getRepository(Message);
	}

	async getMessages() {
		// return this.repository.find();
	}

	async getMessageBy(id: number) {
		// return this.repository.findOne({ where: { id } });
	}

	async storeMessage(message) {
		// return this.repository.save(message);
	}

	async deleteBy(id: number): Promise<void> {
		// await this.repository.delete(id);
	}
}
