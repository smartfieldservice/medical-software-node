//@external module
const express = require("express");
const dashBoardRoute = express.Router();

//@internal module
const { totalInformation } = require("../controllers/dashBoardController")

dashBoardRoute
            .route("/")
            .get(totalInformation)

//@exports
module.exports = dashBoardRoute;
