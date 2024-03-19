//@external module
const express = require("express");
const reporterRoute = express.Router();

//@internal module
const { reporterController, 
        commonController } = require("../controllers/controllerExporter");
        
reporterRoute
            .route("/")
            //@http://localhost:5000/report?passport=
            .get(commonController.patientInfoByPassport)
            //@http://localhost:5000/report
            .post(reporterController.createReport)
            //@http://localhost:5000/report?passport=
            .put(reporterController.editReport);

//@exports
module.exports = reporterRoute;
