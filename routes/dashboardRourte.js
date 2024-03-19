//@external module
const express = require("express");
const dashBoardRoute = express.Router();

//@internal module
const { dashboardController } = require("../controllers/controllerExporter")

dashBoardRoute
            .route("/")
            //@http://localhost:5000/dashboard/
            .get(dashboardController.totalInformation)

//@exports
module.exports = dashBoardRoute;
