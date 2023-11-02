const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "방가" }).status(200);
});

module.exports = router;
