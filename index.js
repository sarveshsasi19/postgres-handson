  
const { Sequelize } = require('sequelize');

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser")

const apiRoutes = require("./servers/apiRoutes");

const server = express();
server.use(morgan("dev")); 
server.use(bodyParser.json()); 

server.get("/", (req, res, next) => { 
    return res.send("Server is running.");
});
server.use('/api', apiRoutes());


server.listen(9000);