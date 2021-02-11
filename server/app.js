const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// const routes = require("./routes");
const authRouter = require('./routes/auth.route')

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);

module.exports = app;