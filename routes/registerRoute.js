//@external module
const express = require("express");
const registerRoute = express.Router();

//@internal module
const { searchPatient, 
        getPatient } = require("../controllers/registerController");
const { userDetails } = require("../controllers/common/commonController");

registerRoute
            .route("/")
            //@http://127.0.0.1:5000/register?slug=B-67737966&from=&to=&sort=
            .get(getPatient)

registerRoute
            .route("/profile")
            //@http://127.0.0.1:5000/register/profile?slug=Heri%Ansk%1709199833334
            .get(userDetails)

registerRoute
            .route("/:passport")
            //@http://127.0.0.1:5000/register/037
            .get(searchPatient)


//@exports
module.exports = registerRoute;
