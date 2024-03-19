//@external module
const express = require("express");
const doctorRoute = express.Router();

//@internal module
const { registerController } = require("../controllers/controllerExporter");

doctorRoute
        .route("/")
        //@http://localhost:5000/doctor?slug=&from=&to=&sort=
        .get(registerController.getPatient)

doctorRoute
        .route("/:passport")
        //@http://localhost:5000/doctor/033
        .get(registerController.searchPatient)

//@exports
module.exports = doctorRoute;
