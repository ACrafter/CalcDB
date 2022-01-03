/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import {ConnectionOptions, Connection, createConnection, getConnection} from "typeorm";
import "reflect-metadata";

export const config: ConnectionOptions = {
  name: "test",
  type: "mysql",
  host: "mysql-64736-0.cloudclusters.net",
  port: 17925,
  username: "admin",
  password: "qD9RIw8X",
  database: "Equations",
  synchronize: true,
};

export const connect =async () => {
  let connection: Connection;

  try {
    connection = getConnection(config.name);
  } catch (err) {
    connection = await createConnection(config);
  }

  return connection;
};
