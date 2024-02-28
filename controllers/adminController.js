const userModel = require("../models/userModel");
const { hashedPassword } = require("../utilities/helperFunctions");
const { errorResponse, successResponse } = require("../utilities/responserHandler");


const searchUser = async(req, res) => {
    try {
        res.status(200).json({message : "I in search user"});
    } catch (error) {
        errorResponse(error,res);
    }
}

//@for user registration
//@protected route(superAdmin)
const createUser = async(req, res) => {
    try {
        
        const hashPassword = await hashedPassword(req.body.password);

        const newUser = new userModel({
            name : req.body.name,
            phone : req.body.phone,
            password : hashPassword,
            role : req.body.role
        });

        await newUser.save();

        successResponse(200, `New ${req.body.role} saved successfully !`, newUser, res);

    } catch (error) {

        if(error.code === 11000){
            error.message = "Phone number already exist !";
        }
        errorResponse(error,res);
    }
};

const editUser = async(req, res) => {
    try {
        res.status(200).json({message : "I in edit user"});
    } catch (error) {
        errorResponse(error,res);
    }
}

const deleteUser = async(req, res) => {
    try {
        res.status(200).json({message : "I in delete user"});
    } catch (error) {
        errorResponse(error,res);
    }
}

//@exports
module.exports = {  searchUser,
                    createUser,
                    editUser,
                    deleteUser
                }