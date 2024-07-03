import { DependencyInjection } from "./framework/DI/DependencyInjection";
import { Express } from "express";
import { Client } from "pg";
import migrations from "./migrations";
import "reflect-metadata";
import App from "./framework/App";
import { UsersModule } from "./modules/users/users.module";
import { AppModule } from "./app.module";

export default async (
  app: Express,
  plugins: {
    "@core/database": {
      client: Client;
    };
  }
) => {
  Reflect.defineMetadata("server", app, App);

  const application: App = DependencyInjection.get(App);

  application.init([AppModule]);

  migrations(plugins["@core/database"].client);
};
