const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// 테이블 생성하기 예시
// mysql은 mysql폴더에서 데이터베이스및 table을 생성해줄 예정이다
//db.pool.query(`CREATE TABLE lists (
//    id INTEGER AUTO_INCREMENT,
//    value TEXT,
//    PRIMARY KEY (id)
//)`, (err, results, fields) => {
//    console.log('results', results);
//})

app.get("/api/values", (req, res, next) => {
  db.pool.query("SELECT *FROM lists;", (err, results, fields) => {
    if (err) return res.status(500).send(err);
    else return res.json(results);
  });
});

app.post("/api/value", (req, res, next) => {
  db.pool.query(
    `INSERT INTO lists (value) VALUES("${req.body.value}");`,
    (err, results, fields) => {
      if (err) return res.status(500).send(err);
      else return res.json({ success: true, value: req.body.value });
    }
  );
});

app.listen(5000, () => {
  console.log("this server listening on 5000");
});
