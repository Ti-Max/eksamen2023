const mysql = require("mysql2");

const con = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: "root",
  password: process.env.DB_ROOT_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = con;
