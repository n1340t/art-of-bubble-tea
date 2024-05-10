import { Pool, PoolConfig } from 'pg';

const dbParams: PoolConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT as string),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const db: Pool = new Pool(dbParams);

export default db;
