import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma/prisma.service";
import { PrismaModule } from "./prisma/prisma.module";
import { WinstonModule } from "nest-winston";
import { ValidationModule } from "./validation/validation.module";
import * as winston from "winston";

@Module({
  imports: [
    UserModule,
    WinstonModule.forRoot({
      format: winston.format.json(),
      level: "debug",
      transports: [new winston.transports.Console()],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    ValidationModule.forRoot(true),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
