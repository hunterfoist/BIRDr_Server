require('dotenv').config();
var express = require("express");
var app = express();
var sequelize = require("./db");
app.use(express.json());

sequelize.sync();

app.use(require("./middleware/headers"));
app.use("/log", log);

app.listen(3000, function () {
  console.log("App is listening on port 3000");
});