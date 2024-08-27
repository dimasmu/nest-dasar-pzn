import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  constructor(private validationService: ValidityState) {}

  sayHello(firstName: string, lastName: string): string {
    return `Hello ${firstName} ${lastName}`;
  }
}
