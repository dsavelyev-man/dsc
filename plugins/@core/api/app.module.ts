import { Module } from "./framework/decorators/Module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  modules: [UsersModule],
})
export class AppModule {}
