//@external module
const express = require("express");
const registerRoute = express.Router();

//@internal module
const { searchPatient, 
        getPatient } = require("../controllers/registerController");

registerRoute
            .route("/")
            //@http://localhost:5000/register?slug=&from=&to=&sort=
            .get(getPatient)

registerRoute
            .route("/:passport")
            //@http://localhost:5000/register/033
            .get(searchPatient)

//@exports
module.exports = registerRoute;
