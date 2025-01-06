//typeorm configuration
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { Inventory } from "./entities/Inventory";
import { Category } from "./entities/Category";
import { Customer } from "./entities/Customer";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  // password: "yourpassword",
  password: "postgres",
  // database: "RealOnlineStore",
  database: "realonlinestore",
  entities: [Product, Inventory, Category, Customer],
  migrations: ["src/migrations/*.ts"],
  synchronize: true, // Use migrations for schema updates
});

AppDataSource.initialize()
  .then(() => console.log('Data Source has been initialized!'))
  .catch((err) => console.error('Error during Data Source initialization', err));