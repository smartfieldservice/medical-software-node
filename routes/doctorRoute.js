//@external module
const express = require("express");
const doctorRoute = express.Router();

//@internal module
const { getPatient, 
        searchPatient } = require("../controllers/registerController");

doctorRoute
        .route("/")
        //@http://localhost:5000/doctor?slug=&from=&to=&sort=
        .get(getPatient)

doctorRoute
        .route("/:passport")
        //@http://localhost:5000/doctor/033
        .get(searchPatient)

//@exports
module.exports = doctorRoute;
