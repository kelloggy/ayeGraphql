import { DataSource } from "typeorm";
import { config } from "dotenv";
config();

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    logging: false,
    name: 'default',
    type: "postgres",

    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: 'aye',
    database: process.env.DB,
    entities: ['src/entities/*.ts'],
    synchronize: false,
    migrations: ['src/migration/*.ts'],
});
