//@external module
const express = require("express");
const commonRoute = express.Router();

//@internal module
const { userLogin, 
        userDetails, 
        changeUserPassword} = require("../controllers/common/commonController");
const { loginValidation, 
        validate } = require("../middleware/validationHandler");

commonRoute
        //@http://localhost:5000/login
        .route("/login")
        .post(  loginValidation, validate, userLogin);

commonRoute
        .route("/profile")
        //@http://localhost:5000/profile?slug=Heri%Ansk%1709199833334
        .get(userDetails);

commonRoute
        .route("/change-Password")
        //@http://localhost:5000/change-password
        .post(changeUserPassword);

//@exports
module.exports = commonRoute;