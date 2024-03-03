//@external module
const express = require("express");
const commonRoute = express.Router();

//@internal module
const { userLogin, 
        userDetails } = require("../controllers/common/commonController");

commonRoute
        //@http://localhost:5000/login
        .route("/login")
        .post(userLogin);

commonRoute
        .route("/profile")
        //@http://localhost:5000/profile?slug=Heri%Ansk%1709199833334
        .get(userDetails);

//@exports
module.exports = commonRoute;