//@external module
const express = require("express");
const reporterRoute = express.Router();

//@internal module
const { createReport, 
        editReport } = require("../controllers/reporterController");

reporterRoute
            .route("/")
            .post(createReport)
            .put(editReport);

//@exports
module.exports = reporterRoute;
