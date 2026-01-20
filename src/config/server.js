const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  return app;
};

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = initServer;
