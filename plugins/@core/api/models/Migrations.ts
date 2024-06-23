import Model from "./Model";
import { Client } from "pg";

class User extends Model {
  name = "migrations";

  constructor(client: Client) {
    super(client);
  }
}

export default User;
