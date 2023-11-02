const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "cloud",
});

exports.pool = pool;

// 데탑 mysql 비밀번호 0000
