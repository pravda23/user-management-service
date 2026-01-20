require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const initServer = require("./config/server");
const errorHandler = require("./utils/errorHandler");

const app = initServer();
connectDB();

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
