import Model from "./Model";
import { Client } from "pg";

class Plugin extends Model {
  name = "plugins";

  constructor(client: Client) {
    super(client);
  }
}

export default Plugin;
