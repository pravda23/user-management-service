const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("../routes/userRoutes");
const path = require("path");

const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "/..")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "index.html"));
  });

  app.use("/api/users", userRoutes);

  return app;
};

module.exports = initServer;
