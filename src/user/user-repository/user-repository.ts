import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma/prisma.service";
import { User } from "@prisma/client";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from "nest-winston";
//CONTOH FACTORY PROVIDER
// export class UserRepository {
//   connection: Connection;

//   save() {
//     console.info(`Save user with connection ${this.connection.getName()}`);
//   }
// }

// export function createUserRepository(connection: Connection): UserRepository {
//   const repository = new UserRepository();
//   repository.connection = connection;
//   return repository;
// }

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService, @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger) {
    this.logger.info(`Create user repository`);
  }

  async save(firstName: string, lastName?: string): Promise<User> {
    this.logger.info(`Create user with firstname ${firstName} and lastname ${lastName}`);
    return await this.prismaService.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });
  }
}
