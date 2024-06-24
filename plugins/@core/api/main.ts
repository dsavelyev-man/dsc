import { Express } from "express";
import { Client } from "pg";
import Models from "./models";
import migrations from "./migrations";
import "reflect-metadata";
import App from "./app";

export default async (
  app: Express,
  plugins: {
    "@core/database": {
      client: Client;
    };
  }
) => {
  new App(app);

  migrations(plugins["@core/database"].client);

  const models = new Models(plugins["@core/database"].client);
};
