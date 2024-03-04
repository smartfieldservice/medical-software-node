const { verifyAuthtoken, 
        decodeAccount } = require("../utilities/helperFunctions");
const { errorResponse } = require("../utilities/responserHandler")

//@check that user logged in or not
const isLogin = async(req, res, next) => {

    try {

        const token = req.headers['token'];

        if(token) {
            
            const verified = verifyAuthtoken(token);

            if(verified){
                const decoded = decodeAccount(token);
                req.user = decoded.data;
                next();
            }
        }else {
            res.status(404).json({message : "You are not logged in !"});
        }

    } catch (error) {
        errorResponse(error, res);
    }

}

//@role based access
const requiredRole = function( roleArray ){

    try {

        return function(req, res, next){

            if(req.user && roleArray.includes(req.user.role)){
                next();
            }else{
                res.status(404).json({message : "Unauthorized access !"});
            }
        }
    } catch (error) {
        errorResponse(error, res);
    }
}

//@exports
module.exports = {  isLogin,
                    requiredRole 
                }