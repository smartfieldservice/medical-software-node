//@external module
const express = require('express');
const adminRoute = express.Router();

//@internal module
const { adminController,
        commonController } = require('../controllers/controllerExporter');

const { registrationValidation, 
        validate } = require('../middleware/validationHandler');

adminRoute
        .route("/user")
        //@http://localhost:5000/admin/user?id=65dec1914b6d89874cf0a58b
        .get(commonController.userDetails);

adminRoute
        .route("/:clue")
        //@http://localhost:5000/admin/re
        .get(adminController.searchUser);

adminRoute
        .route("/")
        //@http://localhost:5000/admin
        .post(  registrationValidation, validate, adminController.createUser)
        .put(adminController.editUser)
        //@http://localhost:5000/admin?id=<id>
        .delete(adminController.deleteUser);

//@exports
module.exports = adminRoute;