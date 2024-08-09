import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { Connection } from "../connection/connection";
import { MailService } from "../mail/mail.service";

// depedencies injection memakai modulRef (tidak direkomendasikan memakai ini karena jika depedencies tidak ada maka akan error ketika aplikasi jalan)
// dianjurkan memakai custom provider karena jika depedencies tidak ada maka akan error dari awal bukan ketika aplikasi jalan
@Injectable()
export class MemberService {
  constructor(private modulRef: ModuleRef) {}

  getConnectionName(): string {
    const connection = this.modulRef.get(Connection);
    return connection.getName();
  }

  sendEmail() {
    const mailService = this.modulRef.get(MailService);
    mailService.send();
  }
}
