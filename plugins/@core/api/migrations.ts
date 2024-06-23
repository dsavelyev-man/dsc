import { Client } from "pg";
import { globStream } from "glob";
import { readFile } from "fs/promises";

const migrations = async (client: Client) => {
  await client.query(
    "CREATE TABLE IF NOT EXISTS migrations (name VARCHAR(255) PRIMARY KEY)"
  );

  const stream = globStream(`${__dirname}/migrations/**/*.sql`);

  stream.on("data", async (path) => {
    let filename = path.split("/").at(-1);

    const query = await readFile(path);

    // const exists = await client.query("SELECT * FROM ")
  });
};

export default migrations;
