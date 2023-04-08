const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());







app.use(express.static("public"));

const testRouter = require("../src/Routes/testRoute");
app.use("/api/testRoute", testRouter);

const roleRouter = require("../src/Routes/role");
app.use("/api/role", roleRouter)

module.exports = app;