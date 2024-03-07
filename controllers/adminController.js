//@internal module
const userModel = require("../models/userModel");
const { hashedPassword, 
        generateSlug, 
        escapeString } = require("../utilities/helperFunctions");
const { errorResponse, 
        successResponse, 
        newError } = require("../utilities/responserHandler");

//@search an user by using name,email or phone
//@protected route(admin)
const searchUser = async(req, res) => {
    try {

        const queryString = new RegExp( escapeString(req.params.clue) , "i");
        const queryPhone = new RegExp( "^" + escapeString(req.params.clue), "i");

        let userData;

        if(req.params.clue !== ""){

            userData = await userModel.find({

                $or : [
                    { firstName : queryString },
                    { lastName : queryString },
                    { email : queryString },
                    { phone : queryPhone }
                ]
            });
        }

        res.status(200).json({data : userData, message : `${userData.length} user's found !`});

    } catch (error) {
        errorResponse(error,res);
    }
};

//@for user registration
//@protected route(superAdmin)
const createUser = async(req, res) => {
    try {
        
        const hashPassword = await hashedPassword(req.body.password);

        const newUser = new userModel({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            phone : req.body.phone,
            password : hashPassword,
            role : req.body.role,
            slug : generateSlug(req.body.firstName, req.body.lastName)
        });

        await newUser.save();

        successResponse(200, `New ${req.body.role} saved successfully !`, newUser, res);

    } catch (error) {

        if(error.code === 11000){
            error.message = "Email already exist !";
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
};

//@delete an user
//@protected route(admin)
const deleteUser = async(req, res) => {
    try{

        const userData = await userModel.findOne({_id : req.query.id});

        if(userData){

            await userModel.findByIdAndDelete({
                _id : req.query.id
            });

            res.status(200).json({message : "User deleted successfully !"});

        }else{
            throw newError(404);
        }

    } catch (error) {
        errorResponse(error,res);
    }
};

//@exports
module.exports = {  searchUser,
                    createUser,
                    editUser,
                    deleteUser
                }