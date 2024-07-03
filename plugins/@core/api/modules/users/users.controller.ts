import { Get, Injectable } from "./../../framework/decorators";
import { Controller } from "../../framework/decorators/Controller";
import { UsersService } from "./users.service";
import { Req } from "../../framework/decorators/Req"; 
import { Request, Response } from "express";

@Controller("/users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  list(req: Request, res: Response) {
    this.usersService.hello();
  }
}
