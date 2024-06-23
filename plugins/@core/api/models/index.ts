import { Client } from "pg";
import User from "./User";
import Model from "./Model";
import Plugin from "./Plugin";

class Models {
  public User: User;
  public Plugin: Plugin;

  constructor(client: Client) {
    this.User = new User(client);
    this.Plugin = new Plugin(client);
  }
}

export default Models;
