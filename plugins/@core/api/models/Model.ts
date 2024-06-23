import { Client } from "pg";
import pagination from "../helpers/pagination";

abstract class Model {
  static instance: Model;
  abstract name: string;
  client: Client;

  protected constructor(client: Client) {
    this.client = client;
  }

  paginated(page: string) {
    const p = pagination(page, "20");

    return this.client.query(
      `SELECT * FROM public."${this.name}" LIMIT ${p.take} OFFSET ${p.skip}`
    );
  }
}

export default Model;
