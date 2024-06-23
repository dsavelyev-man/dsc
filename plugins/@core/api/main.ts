import { Express } from "express";
import { Client } from "pg";
import Models from "./models";
import model from "./models/Model";
import migrations from "./migrations";

export default async (
  app: Express,
  plugins: {
    "@core/database": {
      client: Client;
    };
  }
) => {
  migrations(plugins["@core/database"].client);

  const models = new Models(plugins["@core/database"].client);
};
