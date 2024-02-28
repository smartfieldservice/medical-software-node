//@external module
const express = require("express");
const registerRoute = express.Router();

//@internal module
const { searchPatient, 
        getPatient } = require("../controllers/registerController");

registerRoute
            .route("/:passport")
            .get(searchPatient)
registerRoute
            .route("/")
            .get(getPatient)

//@exports
module.exports = registerRoute;
