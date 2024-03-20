//@internal module
const userModel = require("../../models/userModel");
const { verifyPassword, 
        createAuthToken, 
        hashedPassword } = require("../../utilities/helperFunctions");
const { errorResponse, 
        newError, 
        successResponse } = require("../../utilities/responserHandler");
const { userHandler } = require("../../utilities/utilityExporter");

//@user details
//@for admin using id
//@for users using slug
const userDetails = async(req, res) => {

    try {

        let userData;

        const { id , slug } = req.query;

        if(id){
            //@using id for admin
            userData = await userHandler.findPerson({ id });

        }else if(slug){
            //@using slug for user
            userData = await userHandler.findPerson({ slug });

        }
        if(!userData){
            throw newError(404);
        }
        successResponse(200,`User data found successfully !`, userData, res);

    } catch (error) {
        errorResponse(error, res);
    }
}

//@for user login
//@protected route(all user)
const userLogin = async(req, res) => {

    try {

        const email = req.body.email;

        const userData = await userHandler.findPerson({ email });

        if(!userData){

            throw newError(404);

        }else if(! await verifyPassword( req.body.password, userData.password )){
            
            throw newError(404);
        
        }else{

            //@create payload for jwt
            const userPayload = {
                data : {
                    id : userData._id,
                    role : userData.role
                }
            }

            //@jwt token
            const token = createAuthToken( userPayload );

            const authToken = {
                id : userData._id,
                email : req.body.email,
                role : userData.role,
                token : token
            }

            //@set an token object for role-based access & session check
            res.set('token', token);

            res.status(200).json( authToken );

        }
    } catch (error) {
        errorResponse(error, res);
    }

}

//@change user password
//protected route(all user)
const changeUserPassword = async(req, res) => {

    try {

        //@id comes form hidden field
        const id =req.body.id;

        const userData = await userHandler.findPerson({ id });

        if(userData){

            if(await verifyPassword( req.body.oldPassword, userData.password )){

                if( req.body.newPassword === req.body.confirmPassword){

                    const hashPassword = await hashedPassword(req.body.newPassword);

                    await userModel.findByIdAndUpdate({
                        _id : req.body.id
                    },{
                        password : hashPassword
                    }, {
                        new : true
                    });

                    successResponse(200,"Password change successfully !", {}, res);

                }else{
                    //@new & confirm password not matched
                    //console.log("two password not matched");
                    throw newError(404);
                }

            }else{
                //@old password not matched
                //console.log("old password not matched");
                throw newError(404);
            }

        }else{
            //console.log("user data not found");
            throw newError(404);
        }
        
    } catch (error) {
        errorResponse(error, res);
    }
}

//@get the patient information by passport
//@protected route
const patientInfoByPassport = async(req, res) => {
    
    try {

        const passport = req.query.passport;

        const patientData = await userHandler.findPerson({ passport });

        if(!patientData){
            throw newError(404);
        }
        successResponse(200,"patient found", patientData, res);

    } catch (error) {
        errorResponse(error, res);
    }
}

//@exports
module.exports = {  userDetails,
                    userLogin,
                    changeUserPassword,
                    patientInfoByPassport
                }