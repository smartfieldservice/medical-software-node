//@external module
const express = require('express');
const adminRoute = express.Router();

//@internal module
const { searchUser, 
        createUser, 
        editUser, 
        deleteUser } = require('../controllers/adminController');

adminRoute
        .route("/")
        .get(searchUser)
        .post(createUser)
        .put(editUser)
        .delete(deleteUser);

//@exports
module.exports = adminRoute;