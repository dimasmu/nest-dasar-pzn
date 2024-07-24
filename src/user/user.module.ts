import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { MemberService } from './member/member.service';

@Module({
  controllers: [UserController],
  providers: [UserService, MemberService]
})
export class UserModule {}
