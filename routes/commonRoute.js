//@external module
const express = require("express");
const commonRoute = express.Router();

//@internal module
const { commonController } = require("../controllers/controllerExporter");
const { loginValidation, 
        validate } = require("../middleware/validationHandler");

commonRoute
        //@http://localhost:5000/login
        .route("/login")
        .post(  loginValidation, validate, commonController.userLogin);

commonRoute
        .route("/profile")
        //@http://localhost:5000/profile?slug=Heri%Ansk%1709199833334
        .get(commonController.userDetails);

commonRoute
        .route("/change-Password")
        //@http://localhost:5000/change-password
        .post(commonController.changeUserPassword);

//@exports
module.exports = commonRoute;