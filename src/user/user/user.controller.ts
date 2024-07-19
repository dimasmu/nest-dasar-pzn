import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from "@nestjs/common";
import { Request, response, Response } from "express";
import { request } from "http";

@Controller("/api/users")
export class UserController {
  // cara lama ketika memakai HTTP Express
  // @Get("/hello")
  // sayHello(@Req() request: Request): string {
  //   return `Hello ${request.query.name}`;
  // }

  // memakai response
  @Get("/sample-response")
  sampleResponse(@Res() response: Response) {
    // return string
    // response.status(200).send("Sample Response");

    // return json
    response.status(200).json({
      data: "Hello World!",
    });
  }

  @Get("/redirect")
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: "/api/users/sample-response",
      statusCode: 301,
    };
  }

  @Get("sample-response2")
  @Header("content-type", "application/json")
  @HttpCode(200)
  sampleResponse2(): Record<string, string> {
    return {
      data: "Hello Json",
    };
  }

  @Get("/hello")
  async sayHello(@Query("first_name") firstName: String, @Query("last_name") lastName: String): Promise<string> {
    return `Hello ${firstName} ${lastName}`;
  }

  // cara lama ketika memakai HTTP Express
  // @Get("/byId/:id")
  // getById(@Req() request: Request): string {
  //   return `GET ${request.params.id}`;
  // }

  @Get("/byId/:id")
  getById(@Param("id") id: String): string {
    return `GET ${id}`;
  }

  @Post()
  post(): string {
    return "";
  }

  // @Get("/sample")
  // get(): string {
  //   return "Hello Nest JS";
  // }

  @Get("/set-cookie")
  setCookie(@Query("name") name: string, @Res() response: Response) {
    response.cookie("name", name);
    response.status(200).send("Success Set Cookie");
  }

  @Get("/get-cookie")
  getCookie(@Req() request: Request): string {
    return request.cookies["name"];
  }
}
