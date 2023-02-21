import { Destructor, Initializer, Service } from '@fastify-decorators/simple-di';
import { PrismaClient } from '@prisma/client';

// Otherwise known as @Injectable()
@Service()
export default class AuthProvider {
  constructor(private prisma: PrismaClient) { }

  public get dataSource() {
    return this.prisma.user;
  }

  // @Initializer()
  // async init(): Promise<void> {
  //   console.log('Initializing PrismaProvider');
  //   await this.prisma.$connect();
  // }

  // @Destructor()
  // async destroy(): Promise<void> {
  //   await this.prisma.$disconnect();
  // }
  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}