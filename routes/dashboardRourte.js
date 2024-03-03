//@external module
const express = require("express");
const dashBoardRoute = express.Router();

//@internal module
const { totalInformation } = require("../controllers/dashBoardController")

dashBoardRoute
            .route("/")
            //@http://localhost:5000/dashboard/
            .get(totalInformation)

//@exports
module.exports = dashBoardRoute;
