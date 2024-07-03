import { Module } from "../../framework/decorators";
import { UsersController } from "./users.controller";

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
