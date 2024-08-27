import { Module } from "@nestjs/common";
import { UserController } from "./user/user.controller";
import { UserService } from "./user/user.service";
import { MemberService } from "./member/member.service";
import { Connection, createConnection, MongoDBConnection, MysqlConnection } from "./connection/connection";
import { mailService, MailService } from "./mail/mail.service";
// import { createUserRepository, UserRepository } from "./user-repository/user-repository";
import { UserRepository } from "./user-repository/user-repository";
import { ConfigService } from "@nestjs/config";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    MemberService,
    UserRepository,
    // {
    //   provide: Connection,
    //   useClass: process.env.DATABASE == "mysql" ? MysqlConnection : MongoDBConnection,
    // }, // contoh penggunaaan usefactory
    {
      provide: Connection,
      useFactory: createConnection,
      inject: [ConfigService],
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    // {
    //   provide: UserRepository,
    //   useFactory: createUserRepository,
    //   inject: [Connection],
    // },
    {
      provide: "EmailService",
      useExisting: MailService,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
