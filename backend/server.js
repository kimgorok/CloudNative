const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/movies", (req, res) => {
  return db.pool.query("select * from movie;", (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(results);
    return res.json(results);
  });
});

app.use(express.json());

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
