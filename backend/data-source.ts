import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./src/domain-model/entity/auth/User";

export const AppDataSource = new DataSource({
  type: "sqlite", // or mysql or postgresql
  // host: "localhost",
  // port: "", // mysqlは3306
  // username: "",
  // password: "",
  database: "./data/data.db",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./migrations/*.ts"],
  subscribers: [],
});
