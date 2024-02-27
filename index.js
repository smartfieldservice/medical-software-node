const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http");

const app = express();

const server = http.createServer(app)
server.listen(process.env.PORT, () =>{
    console.log(`listening to port ${process.env.PORT}`);
})