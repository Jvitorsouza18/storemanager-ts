// get the client
import mysql from 'mysql2/promise';
import 'dotenv/config';

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = process.env;

// Create the connection pool. The pool-specific settings are the defaults
const connection = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: 'StoreManager',
  password: MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default connection;
