//@internal module
const userModel = require("../../models/userModel");
const { verifyPassword, createAuthToken } = require("../../utilities/helperFunctions");
const { errorResponse, 
        newError, 
        successResponse } = require("../../utilities/responserHandler");

const userDetails = async(req, res) => {

    try {

        let userData;

        console.log(req.query.id)

        if(req.query.id){
            //@using id for admin
            userData = await userModel.findOne({ _id : req.query.id });

        }else if(req.query.slug){
            //@using slug for user
            userData = await userModel.findOne({ slug : req.query.slug });

        }else{
            throw newError(404);
        }

        successResponse(200,`User data found successfully !`,userData, res);

    } catch (error) {
        errorResponse(error, res);
    }

}

const userLogin = async(req, res) => {

    try {

        const userData = await userModel.findOne({ email : req.body.email});

        if(!userData){
            throw newError(404);
        }else if(! await verifyPassword(req.body.password,userData.password)){
            throw newError(404);
        }else{

            //@create payload for jwt
            const userPayload = {
                data : {
                    id : userData._id,
                    role : userData.role
                }
            }

            const token = createAuthToken(userPayload);

            const authToken = {
                id : userData._id,
                email : req.body.email,
                role : userData.role,
                token : token
            }

            res.status(200).json(authToken);

        }
    } catch (error) {
        errorResponse(error,res);
    }

}

//@exports
module.exports = {  userDetails,
                    userLogin
                }