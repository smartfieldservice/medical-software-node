//@external module
const express = require("express");
const registerRoute = express.Router();

//@internal module
const { registerController} = require("../controllers/controllerExporter");

registerRoute
            .route("/")
            //@http://localhost:5000/register?slug=&from=&to=&sort=
            .get(registerController.getPatient)

registerRoute
            .route("/:passport")
            //@http://localhost:5000/register/033
            .get(registerController.searchPatient)

//@exports
module.exports = registerRoute;
