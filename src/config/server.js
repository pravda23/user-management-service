const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("../routes/userRoutes");

const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.send("Hello world!");
  });

  app.use("/api/users", userRoutes);

  return app;
};

module.exports = initServer;
