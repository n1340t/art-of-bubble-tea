import * as mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'admin',
  password: 'password',
  database: 'art_of_bubble_tea_db',
  multipleStatements: true
});

export default connection;