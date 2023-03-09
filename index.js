require("dotenv").config();

// inside index.js
const PORT = 3000;
const express = require("express");
const server = express();
const morgan = require("morgan");
server.use(morgan("dev"));
const { client } = require("./db");

client.connect();

server.use(express.json());

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});

const apiRouter = require("./api");
server.use("/api", apiRouter);
