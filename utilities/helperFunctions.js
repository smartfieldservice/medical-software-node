//@external module
const bcrypt = require('bcryptjs');
const moment = require('moment/moment');
const jwt = require("jsonwebtoken");

//@function for hashed the password
const hashedPassword = async(password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (error) {
        return error;
    }
};

//@function for verify password
const verifyPassword = async(inputPassword, hashPassword) => {
    try {
        return await bcrypt.compare(inputPassword,hashPassword)
    } catch (error) {
        return error;
    }
}

//@function for create authentication for an account using jwt
const createAuthToken = function(payload){
    return jwt.sign(payload,process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRITY
    });
}

//@function for verify Authentication token of an account using jwt
const verifyAuthtoken = function(authToken){
    return jwt.verify(authToken,process.env.JWT_SECRET_KEY);
}

//@function for decode an account of user or admin
const decodeAccount = function(authToken){
    return jwt.decode(authToken);
}


//@function for regular expression string
const escapeString = function(str){
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); 
};

//@function for pagination
const pagination = async(pageNo, pageLimit , data) => {

        try {
            const page = parseInt(pageNo) || 1;
            const limit = parseInt(pageLimit) || 10;
            const skip = (page - 1) * limit;

            return await data.skip(skip).limit(limit);

        } catch (error) {
            return error;
        }
}

//@funtion for format date
const formatDate = function(date){

    const parseDate = moment(date, 'DD-MM-YYYY', true);
    
    if(parseDate.isValid()){
        return parseDate.format('YYYY-MM-DD');
    }else{
        console.log('Invalid date format !');
        return;
    }

}

//@function for make slug
const generateSlug = (s1, s2) => {

    let slug = `${s1}%${s2}`;

    let time = Date.now();

    slug = `${slug}%${time}`;

    slug = slug.toLowerCase();

    return slug.replace(/\s+/g, "-");

}


//@exports
module.exports = {  hashedPassword,
                    verifyPassword,
                    createAuthToken,
                    verifyAuthtoken,
                    decodeAccount,
                    escapeString,
                    pagination,
                    formatDate,
                    generateSlug
                }