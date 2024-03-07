//@external module
const { body , 
        validationResult } = require("express-validator");
const validator = require("validator");
const { errorResponse } = require("../utilities/responserHandler");

//@check during registration of user
const registrationValidation = [
    body("email" , "Invalid Email").isEmail(),
    body("password", "Minimum length of 5 characters required").isLength({ min : 5 }),
    body("phone").custom((value) => {
        if(!validator.isMobilePhone(value, ["bn-BD"])){
            throw new Error("Invalid phone number");
        }
        return true
    }),
];

//@check during login of user
const loginValidation = [
    body("email" , "Invalid Email").isEmail(),
];

const validate = async(req, res, next) => {

    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array() });
        }else{
            next();
        }
    } catch (error) {
        errorResponse(error, res);
    }
};

//@exports
module.exports = {  registrationValidation,
                    loginValidation,
                    validate
                }

