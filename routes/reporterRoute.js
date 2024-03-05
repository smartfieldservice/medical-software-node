//@external module
const express = require("express");
const reporterRoute = express.Router();

//@internal module
const { createReport, 
        editReport } = require("../controllers/reporterController");

reporterRoute
            .route("/")
            //@http://localhost:5000/report
            .post(createReport)
            //@http://localhost:5000/report?passport=
            .put(editReport);

//@exports
module.exports = reporterRoute;
