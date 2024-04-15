import { DataSource } from "typeorm";
import { Country } from "./entities/country";

export const getDataSource = async () => {
  const dataSource = new DataSource({
    type: "sqlite",
    database: "db_recovered.sqlite",
    entities: [Country],
    synchronize: true,
  });
  await dataSource.initialize();
};
