const { Pool } = require("pg");

const dbParams =  {
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

export default db;