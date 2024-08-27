import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaService } from "./prisma/prisma.service";

// prisma dibuat global karena dipakai dibanyak tempat, cukup import di app module saja
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
