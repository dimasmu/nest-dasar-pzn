import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import * as HttpMock from "node-mocks-http";
import { UserService } from "./user.service";

describe("UserController", () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should can say hello", async () => {
    const response = await controller.sayHello("Dimas", "Maendra");
    expect(response).toBe("Hello Dimas Maendra");
  });

  it("should can get view", async () => {
    const response = HttpMock.createResponse();
    controller.viewHello("Dimas", response);

    expect(response._getRenderView()).toBe("index.html");
    expect(response._getRenderData()).toEqual({
      name: "Dimas",
      title: "Template Engine",
    });
  });
});
