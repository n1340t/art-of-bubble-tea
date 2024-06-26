import recipesRouter from "../backend/routes/recipes";
import ordersRouter from "../backend/routes/orders";
import dotenv from 'dotenv';

import {initialize, query} from '../database/config';
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

import path from 'path';
import express from 'express';
import cors from 'cors';
// import debug from 'debug';
import webpackDev from './dev';

const dev = process.env.NODE_ENV !== 'production';
const app: express.Application = express();
const port = process.env.PORT || 3000;
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use(cors());

if (dev) {
  app.use(webpackDev.comp).use(webpackDev.hot);
}
(async () => {
  await initialize();
  console.log('Database initialized.');
  
  /**
   * FOR TESTING PURPOSES, DELETE WHEN DONE <<<<<<<<<<<<<<<<<<<<< 
   */
  await query(`create table if not exists recipes (
    id int primary key auto_increment,
    name varchar(255) not null,
    description text not null,
    price decimal(10, 2) not null,
    image varchar(255) not null
    );`);
  await query(`create table if not exists orders (
    id int primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    address varchar(255) not null,
    total decimal(10, 2) not null
    );`);
  console.log(`Tables created.`);
  /**
   * FOR TESTING PURPOSES, DELETE WHEN DONE <<<<<<<<<<<<<<<<<<<<< 
   */
})();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello')
});

// link the routes to the app (postman testing/localhost testing)
app.use('/api/recipe', recipesRouter);
app.use('/api/order', ordersRouter);

const runningMessage = `Server running at http://localhost:${port}`;
app.listen(port, () => {
  console.log(runningMessage);
});