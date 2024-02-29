//@external module
const express = require('express');
const adminRoute = express.Router();

//@internal module
const { searchUser, 
        createUser, 
        editUser, 
        deleteUser } = require('../controllers/adminController');
const { userDetails } = require('../controllers/common/commonController');

adminRoute
        .route("/")
        //@http://localhost:5000/admin
        .get(searchUser)
        .post(createUser)
        .put(editUser)
        .delete(deleteUser);

adminRoute
        .route("/user")
        //@http://127.0.0.1:5000/admin/user?id=65dec1914b6d89874cf0a58b
        .get(userDetails);

//@exports
module.exports = adminRoute;