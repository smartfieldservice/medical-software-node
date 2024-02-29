const userModel = require("../../models/userModel");
const { errorResponse, 
        newError, 
        successResponse } = require("../../utilities/responserHandler");

const userDetails = async(req, res) => {

    try {

        let userData;

        if(req.query.id){

            userData = await userModel.findOne({ _id : req.query.id });

        }else if(req.query.slug){

            userData = await userModel.findOne({ slug : req.query.slug });

        }else{
            throw newError(404);
        }

        successResponse(200,`User data found successfully !`,userData, res);

    } catch (error) {
        errorResponse(error, res);
    }

}

//@exports
module.exports = { userDetails
                }