import {Express} from "express";
import {Client} from "pg"

export default async (app: Express) => {
    const data = {
        client: new Client({
            password: process.env.DATABASE_PASSWORD,
            user: process.env.DATABASE_USER,
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DATABASE_PORT as string),
            database: process.env.DATABASE,
        })
    }

    await data.client.connect()

    return data
}